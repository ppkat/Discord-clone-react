import React from 'react';
import { useRouter } from 'next/router';
import { createClient } from '@supabase/supabase-js';
import ButtonSendSticker from '../../src/components/ButtonSendSticker'
import ButtonSendMessages from '../../src/components/ButtonSendMessage';
import TextInput from '../../src/components/TextInput';
import { BackgroundImageContainer, ExternalContainer, MessageListAndTextSenderContainer } from './styles'
import Header from './components/Header';
import MessageList from './components/MessageList';
import { SenderGadgetsContainer } from './components/MessageList/styles';

const SUPABASE_ANON_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzQ4OTM5MCwiZXhwIjoxOTU5MDY1MzkwfQ.U7n6ZTfcuLzyObgrxJlip5YuWuLheFoVb2MJpmRgdG0'
const SUPABASE_URL = 'https://gorbyenjquyjljejfxox.supabase.co'
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

function realTimeListener(callbackfunc) {
    supabaseClient.from('mensagens').on('*', (data) => {
        //console.log(data)
        callbackfunc(data.new)
    })
        .subscribe()
}

export default function ChatPage() {
    const roteamento = useRouter()
    const usuarioLogado = roteamento.query.username
    const [mensagem, setMensagem] = React.useState('');
    const [listaDeMensagens, setListaDeMensagens] = React.useState([]);

    React.useEffect(() => {
        supabaseClient.from('mensagens').select('*').order('created_at', { ascending: false }).then(({ data }) => {
            //console.log(data)
            setListaDeMensagens(data)
        })

        realTimeListener((novaMensagem) => {

            setListaDeMensagens(valorAtualLista => [novaMensagem, ...valorAtualLista])
        })
    }, [])

    function insereNoBanco(mensagem) {
        supabaseClient.from('mensagens').insert([
            mensagem
        ]).then(({ data }) => setMensagem(''))
    }

    function handleNovaMensagem(novaMensagem) {
        const mensagem = {
            //id: listaDeMensagens.length + 1,
            usuario: usuarioLogado,
            mensagem: novaMensagem,
        };

        insereNoBanco(mensagem)
    }

    return (
        <BackgroundImageContainer>
            <ExternalContainer>
                <Header />
                <MessageListAndTextSenderContainer>
                    <MessageList mensagens={listaDeMensagens} />

                    <SenderGadgetsContainer>

                        <ButtonSendMessages />
                        <ButtonSendSticker />
                        <TextInput />

                    </SenderGadgetsContainer>
                </MessageListAndTextSenderContainer>
            </ExternalContainer>
        </BackgroundImageContainer>
    )
}