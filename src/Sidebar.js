const imagensPerfil = ["./assets/Irelia.png", "./assets/Kaisa.png",
                       "./assets/Mordekaiser.png", "./assets/Nocturne.png",
                       "./assets/Morgana.png", "./assets/Shen.png"]
                       
const campeoes = ["irelia", "kaisa", "Mordekaiser", "nocturne", "morgana", "Shen"];


export default function Sidebar() {
    return (
        <div class="sidebar">
            <Usuario imagem={imagensPerfil[5]} campeao={campeoes[5]}/>
            <div class="sugestoes">
                <Titulo/>
                <Sugestao imagem ={imagensPerfil[0]} campeoes={campeoes[0]}/>
                <Sugestao imagem ={imagensPerfil[1]} campeoes={campeoes[1]}/>
                <Sugestao imagem ={imagensPerfil[2]} campeoes={campeoes[2]}/>
                <Sugestao imagem ={imagensPerfil[3]} campeoes={campeoes[3]}/>
                <Sugestao imagem ={imagensPerfil[4]} campeoes={campeoes[4]}/>
            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}

function Usuario(props) {
    return (
        <div class="usuario">
            <img src={props.imagem} alt="img"/>
            <div class="texto">
                <strong>{props.campeao}</strong>
                {props.campeao}
            </div>
        </div>
    )
}
function Titulo() {
    return (
        <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
        </div>
    )
}

function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img class="img-user" src={props.imagem} alt="img"/>
                <div class="texto">
                    <div class="nome">{props.campeoes}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
        </div>
    )
}