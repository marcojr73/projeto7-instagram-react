const imagensPerfil = "./assets/Shen.png"   
const campeoes = "Shen";

const perfilSugestao = [
    {imagem:"./assets/Irelia.png", nome:"irelia"},
    {imagem:"./assets/Kaisa.png", nome:"kaisa"},
    {imagem:"./assets/Mordekaiser.png", nome:"Mordekaiser"},
    {imagem:"./assets/Nocturne.png", nome:"nocturne"},
    {imagem:"./assets/Morgana.png", nome:"morgana"}
]


export default function Sidebar() {
    return (
        <div class="sidebar">
            <Usuario imagem={imagensPerfil} campeao={campeoes}/>
            <div class="sugestoes">
                <Titulo/>
                {perfilSugestao.map(({imagem, nome}) =>
                <Sugestao imagem ={imagem} campeoes={nome}/>
                )}
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