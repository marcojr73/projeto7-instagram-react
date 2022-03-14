const userStory = [
    {campeao: "ezreal", imagem: "./assets/ez.png"},
    {campeao: "jax", imagem: "assets/Jax.png"},
    {campeao: "leesin", imagem: "assets/LeeSin.png"},
    {campeao: "ryze", imagem: "assets/Ryze.png"},
    {campeao: "sett", imagem: "assets/Sett.png"},
    {campeao: "tahmkench", imagem: "./assets/tk.png"},
    {campeao:"quyiana", imagem: "assets/Qiyana.png"},
    {campeao:"volibear", imagem: "assets/Volibear.png"}
]

export default function Stories() {
    return (
        <div class="stories">
            {userStory.map(({campeao, imagem}) =>  <Story url={imagem} nome={campeao}/> )}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

function Story(props) {
    return(
        <div class="story">
            <div class="imagem">
                <img src={props.url} alt="img" />
            </div>
            <div class="usuario">
                {props.nome}
            </div>
        </div>
    )
}