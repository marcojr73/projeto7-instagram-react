let imagensPosts = ["./assets/tk.jpg", "./assets/sett.jpg", "./assets/qiyana.jpg"];
let imagensPerfil = ["./assets/tk.png", "./assets/Sett.png", "./assets/Qiyana.png"];
let nomes = ["tahmkench", "Sett", "quyiana"];
let curtidoPor = ["jax", "gwen", "aphelios"];
let curtidoImg = ["./assets/Jax.png", "./assets/Gwen.png", "./assets/Aphelios.png"]

export default function Posts() {
    return (
        <div>
            <div class="post">
                <Topo perfil = {imagensPerfil[0]} nomes = {nomes[0]} />
                <Conteudo imagem = {imagensPosts[0]}/>
                <Fundo curtido={curtidoPor[0]} curtidoImg={curtidoImg[0]} />
            </div>

            <div class="post">
                <Topo perfil = {imagensPerfil[1]} nomes = {nomes[1]} />
                <Conteudo imagem = {imagensPosts[1]} />
                <Fundo curtido={curtidoPor[1]} curtidoImg={curtidoImg[1]} />
            </div>

            <div class="post">
                <Topo perfil = {imagensPerfil[2]} nomes = {nomes[2]} />
                <Conteudo imagem = {imagensPosts[2]} />
                <Fundo curtido={curtidoPor[2]} curtidoImg={curtidoImg[2]} />
            </div>
        </div>
        
        
    )
}
function Topo(props) {
    return (
        <div class="topo">
            <div class="usuario">
                <img src= {props.perfil} />
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
            <img src={props.imagem} />
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

            <div class="curtidas">
                <img src={props.curtidoImg} />
                <div class="texto">
                    Curtido por <strong>{props.curtido}</strong> e <strong>outras 101.523 pessoas</strong>
                </div>
            </div>
        </div>
    )
}