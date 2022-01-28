import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from '../config.json';
import React from 'react';
import { useRouter } from 'next/router';

function PageTitle(tag) {
    const Type = tag.type || 'h1'
    return(
        <>
            <Type>{tag.children}</Type>

            <style jsx>{`
        
                ${Type}{
                    color: ${appConfig.theme.colors.primary['600']};
                    text-align: center;
                    font-size: 30px;
                    font-weight: 900px
                }

            `}</style>
        </>
        
    )
}
//main function
export default function PaginaInicial() {
  //reload the username through the react 
  const [username, setUsername] = React.useState('ppkat')

  //routing with next
  const routing = useRouter();

  //github profile image
  const userImage = `https://github.com/${username}.png`

  //github profile info
  const [userInfo, setUserInfo] = React.useState(username)
  React.useEffect( () => {
    fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => setUserInfo(data))
  }, [])

  return (
    <>
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.primary['400'],
          backgroundImage: 'url(/night.png)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'luminosity',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '700px',
            borderRadius: '7px', padding: '32px', margin: '16px',
            boxShadow: '0 6px 10px 0 rgb(0 0 0 / 40%)',
            backgroundColor: appConfig.theme.colors.neutrals[700],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={(ev)=>{
              ev.preventDefault()
              routing.push('/chat')
              
              //window.location.href = '/chat' //troca de página a partir das rotas
            }}
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <PageTitle tag="h2">Bem vindo ao ppcord</PageTitle>
            <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
              {appConfig.name}
            </Text>

            <TextField
              fullWidth
              value={username}
              onChange={(ev)=>{
                const value = ev.target.value;
                setUsername(value);

              }}
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type='submit'
              label='Entrar'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
          </Box>
          {/* Formulário */}


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: '1px solid',
              borderColor: appConfig.theme.colors.primary[800],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
                borderColor: 'rgba(199, 21, 240, 0.2)',
                borderWidth: '3px',
                borderStyle: 'solid'
              }}
              src={/*()=>{
                if(username.length == 0){
                  return(`https://github.com/${username}.png`)
                }
                else{
                  return(userImage)
                }
              }*/
              `https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: '3px 10px',
                borderRadius: '1000px',
                maxWidth: '200px'
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}

//componente react
// function HomePage() {
//     return(
//         <div>
//             <GlobalStyle/>
//             <PageTitle type="h2">Minha primeira página com react</PageTitle>
//             <p>Bem vindo a minha primeira página react</p>
//         </div>
//     )
//   }
  
//   export default HomePage