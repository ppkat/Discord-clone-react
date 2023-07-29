import { TextField } from "@skynexui/components";
import appConfig from '/config.json'

export default ({ children, handleMessageFunc, mensagem, setMensagem }) => (
    <TextField
        value={mensagem}
        onChange={(event) => {
            const valor = event.target.value;
            setMensagem(valor);
        }}
        onKeyPress={(event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                handleMessageFunc(mensagem);
            }
        }}
        placeholder="Digite aqui"
        type="textarea"
        styleSheet={{
            width: '100%',
            border: '0',
            resize: 'none',
            borderRadius: '5px',
            padding: '6px 8px',
            backgroundColor: appConfig.theme.colors.neutrals[800],
            marginRight: '12px',
            color: appConfig.theme.colors.neutrals[200],
        }}
    >
        {children}
    </TextField>
)