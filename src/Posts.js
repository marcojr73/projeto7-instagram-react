const arrPosts = [
    {profilePost: "./assets/tk.png",
    profileNome: "tahmkench",
    imagem: "./assets/tk.jpg",
    mensagem: "Você é tão rápido como uma formiga no melaço",
    curtido: "jax",
    curtidoImg: "./assets/Jax.png",
    curtidas: "98"},

    {profilePost: "./assets/Sett.png",
    profileNome: "Sett",
    imagem: "./assets/sett.jpg",
    mensagem: "Coisas que eu amo: mamis, quebrar pescoços e boa seda ioniana.",
    curtido: "gwen",
    curtidoImg: "./assets/Gwen.png",
    curtidas: "54"},

    {profilePost: "./assets/Qiyana.png",
    profileNome:  "quyiana",
    imagem: "./assets/qiyana.jpg",
    mensagem: "Um império glorioso, com uma imperatriz mais gloriosa ainda",
    curtido: "aphelios",
    curtidoImg: "./assets/Aphelios.png",
    curtidas: "132"},

    {profilePost: "./assets/LeeSin.png",
    profileNome: "leesin",
    imagem: "./assets/ls.jpg",
    mensagem: "Os espíritos vivem entre nós",
    curtido: "ezreal",
    curtidoImg: "./assets/ez.png",
    curtidas: "118"}
]


export default function Posts() {
    return (
        <div class="posts">
            <Post/>
        </div>
    )
}

function Post(){
    return(
        arrPosts.map(({profilePost, profileNome, imagem, curtido,mensagem, curtidoImg, curtidas}) => 
        <div class="post">
            <Topo perfil = {profilePost} nomes = {profileNome} />
            <Conteudo imagem = {imagem}/>
            <Fundo curtido={curtido} mensagem={mensagem} nome={profileNome} curtidoImg={curtidoImg} curtidas={curtidas}/>
        </div>
        )
      
    )
}

function Topo(props) {
    return (
        <div class="topo">
            <div class="usuario">
                <img class="img-user" src= {props.perfil} alt="img"/>
                {props.nomes}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    )
}

function Conteudo(props) {
    return (
        <div class="conteudo">
            <img src={props.imagem} alt="img"/>
        </div>
    )
}

function Fundo(props) {
    return (
        <div class="fundo">
            <div class="acoes">
                <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div class = "message">
                <div class="mensagem">
                    <strong>{props.nome}</strong> {props.mensagem}
                </div>
            </div>

            <div class="curtidas">
                <img class="img-user" src={props.curtidoImg} alt="img"/>
                <div class="texto">
                    Curtido por <strong>{props.curtido}</strong> e <strong>outros {props.curtidas} campeões</strong>
                </div>
            </div>
        </div>
    )
}