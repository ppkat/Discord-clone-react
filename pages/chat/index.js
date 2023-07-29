import React from 'react';
import { useRouter } from 'next/router';
import { createClient } from '@supabase/supabase-js';
import ButtonSendSticker from '../../src/components/ButtonSendSticker'
import ButtonSendMessages from '../../src/components/ButtonSendMessage';
import TextInput from '../../src/components/TextInput';
import { BackgroundImageContainer, ExternalContainer, MessageListAndTextSenderContainer } from './styles'
import Header from './components/Header';
import MessageList from './components/MessageList';
import { SenderGadgetsContainer } from './styles';

const supabaseClient = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

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
        ]).then(() => setMensagem(''))
    }

    function handleNovaMensagem(novaMensagem) {
        if (!novaMensagem) return
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

                        <TextInput handleMessageFunc={handleNovaMensagem} mensagem={mensagem} setMensagem={setMensagem}>
                            <ButtonSendMessages handleMessageFunc={handleNovaMensagem} />
                        </TextInput>
                        <ButtonSendSticker />

                    </SenderGadgetsContainer>
                </MessageListAndTextSenderContainer>
            </ExternalContainer>
        </BackgroundImageContainer>
    )
}