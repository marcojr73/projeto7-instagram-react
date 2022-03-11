let campeoes = ["ezreal", "jax", "leesin", "volibear", "ryze", "sett", "tahmkench", "quyiana"]
let imagens = [
            "./assets/ez.png", "assets/Jax.png", "assets/LeeSin.png", "assets/Volibear.png",
            "assets/Ryze.png", "assets/Sett.png","assets/tk.png", "assets/Qiyana.png"
            ]

export default function Stories() {
    return (
        <div class="stories">

            <Story url={imagens[0]} nome={campeoes[0]}/>
            <Story url={imagens[1]} nome={campeoes[1]}/>
            <Story url={imagens[2]} nome={campeoes[2]}/>
            <Story url={imagens[3]} nome={campeoes[3]}/>
            <Story url={imagens[4]} nome={campeoes[4]}/>
            <Story url={imagens[5]} nome={campeoes[5]}/>
            <Story url={imagens[6]} nome={campeoes[6]}/>
            <Story url={imagens[7]} nome={campeoes[7]}/>

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
                <img src={props.url} />
            </div>
            <div class="usuario">
                {props.nome}
            </div>
        </div>
    )
}