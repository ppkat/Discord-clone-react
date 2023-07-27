import { Container, MessageContainer, MessageDate, ProfileUsername, UserMessage, UserPhoto } from "./styles";

export default function MessageList(props) {
    //console.log(props.mensagens.mensagem)
    return (

        <Container>
            {props.mensagens.map((mensagem) => {
                return (
                    <MessageContainer message={mensagem}>

                        <UserPhoto message={mensagem} />
                        <ProfileUsername message={mensagem} />
                        <UserMessage message={mensagem} />
                        <MessageDate message={mensagem} />
                    </MessageContainer>
                );
            })}
        </Container >
    )
}