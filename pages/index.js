function GlobalStyle(args) {

    return(
        <style global jsx>{`
            *{
                margin: 0;
                padding: 0;
                border-sizing: border-box;
            }
        `}</style>
    )
    
}

function PageTitle(tag) {
    const Type = tag.type || 'h1'
    return(
        <>
            <Type>{tag.children}</Type>

            <style jsx>{`
        
                ${Type}{
                    color: blue;
                    text-align: center;
                    font-size: 80px;
                    font-weight: 1300px
                }

            `}</style>
        </>
        
    )
}


//componente react
function HomePage() {
    return(
        <div>
            <PageTitle type="h2">Minha primeira página com react</PageTitle>
            <p>Bem vindo a minha primeira página react</p>
        </div>
    )
  }
  
  export default HomePage