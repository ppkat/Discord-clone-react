import { Container, MessageContainer, MessageInfoContainer, ProfileUsername, UserMessage, UserPhoto } from "./styles";
import MessageDate from "/src/components/MessageDate";

export default function MessageList(props) {
    //console.log(props.mensagens.mensagem)
    return (

        <Container>
            {props.mensagens.map((mensagem) => {
                return (
                    <MessageContainer message={mensagem}>

                        <MessageInfoContainer>
                            <UserPhoto message={mensagem} />
                            <ProfileUsername message={mensagem} />
                            <MessageDate message={mensagem} />
                        </MessageInfoContainer>

                        <UserMessage message={mensagem} />
                    </MessageContainer>
                );
            })}
        </Container >
    )
}