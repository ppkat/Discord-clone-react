import { Box, Text, Image } from "@skynexui/components"
import appConfig from '/config.json'

export function Container({ children }) {
    return (
        <Box
            tag="ul"
            styleSheet={{
                overflowY: 'scroll',
                display: 'flex',
                flexDirection: 'column-reverse',
                flex: 1,
                color: appConfig.theme.colors.neutrals["000"],
                marginBottom: '16px',
            }}
        >
            {children}
        </Box>
    )
}

export function MessageContainer({ children, message }) {
    return (
        <Text
            key={message.id}
            tag="li"
            styleSheet={{
                borderRadius: '5px',
                padding: '6px',
                marginBottom: '20px',
                alignItems: 'center',
                hover: {
                    backgroundColor: appConfig.theme.colors.neutrals[700],
                }
            }}
        >
            {children}
        </Text>
    )
}

export function UserPhoto({ message }) {
    return (
        <Image
            styleSheet={{
                width: '40px',
                height: '40px',
                borderRadius: '40%',
                display: 'inline',
                marginRight: '8px',
            }}
            src={`https://github.com/${message.usuario}.png`}
        />
    )
}

export function ProfileUsername({ message }) {
    return (
        <Text
            tag="span"
            styleSheet={{
                fontSize: '23px',
                display: 'inline-block',
                height: '40px',
                margin: '0',
            }}
        >
            {message.usuario}
        </Text>
    )
}

export function UserMessage({ message }) {
    return (
        <Text
            variant='body2'
        >
            {message.mensagem}
        </Text>
    )
}

export function MessageDate({ message }) {
    return (
        <Text
            styleSheet={{
                fontSize: '10px',
                marginLeft: '8px',
                color: appConfig.theme.colors.neutrals[300],
            }}
            tag="span"
        >
            {(new Date().toLocaleDateString())}
        </Text>
    )

}