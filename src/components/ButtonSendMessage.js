import React from 'react';
import { Box, Button, Text, Image } from '@skynexui/components';
import appConfig from '../../config.json';
import { handleNovaMensagem } from '../../pages/index'

export default () => (
    <Box
        styleSheet={{
            position: 'relative',
        }}
    >
        <Button
            buttonColors={{
                contrastColor: '#FFFFFF',
                mainColorLight: appConfig.theme.colors.primary[300],
                mainColorStrong: appConfig.theme.colors.primary[600]
            }}
            size="xl"
            variant="secondary"

            styleSheet={{
                minWidth: '50px',
                minHeight: '50px',
                backgroundImage: 'url(/sendButton2.png)',
                backgroundSize: 'cover',
                lineHeight: '0',
                display: 'flex',
                margin: '0 20px 8px 0',
                hover: {
                    backgroundColor: appConfig.theme.colors.primary[400],
                    backgroundImage: 'url(/sendButton.png)'
                }
            }}
            onClick={handleNovaMensagem}
        >

        </Button>
    </Box >
)