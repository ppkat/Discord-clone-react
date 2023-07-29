import { Box } from '@skynexui/components';
import appConfig from '../../config.json';

export function BackgroundImageContainer({ children }) {
    return (
        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: appConfig.theme.colors.primary[500],
                backgroundImage: `url(night.png)`,
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                color: appConfig.theme.colors.neutrals['000']
            }}
        >
            {children}
        </Box>
    )
}

export function ExternalContainer({ children }) {
    return (
        <Box
            styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                borderRadius: '5px',
                backgroundColor: appConfig.theme.colors.neutrals[700],
                height: '100%',
                maxWidth: '95%',
                maxHeight: '95vh',
                padding: '32px',
            }}
        >
            {children}
        </Box>
    )
}

export function MessageListAndTextSenderContainer({ children }) {
    return (
        <Box
            styleSheet={{
                position: 'relative',
                display: 'flex',
                flex: 1,
                height: '80%',
                backgroundColor: appConfig.theme.colors.neutrals[600],
                flexDirection: 'column',
                borderRadius: '5px',
                padding: '16px',
            }}
        >
            {children}
        </Box>
    )
}

export function SenderGadgetsContainer({ children }) {
    return (
        <Box
            as="form"
            styleSheet={{
                display: 'flex',
                alignItems: 'center',
            }}
        >{children}</Box>
    )
}