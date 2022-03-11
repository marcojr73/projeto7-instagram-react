import ReactDOM from 'react-dom'
import Navbar from './Navbar'
import Stories from './Stories'
import Posts from './Posts'
import Sidebar from './Sidebar'

function App(){
    return(
        <div>
            <Navbar/>
            <div class="corpo">
                <div class="esquerda">
                    <Stories/>
                    <div class="posts">
                        <Posts/>
                    </div>
                </div>
                <Sidebar/>
            </div>
            
        </div>
    )
}


let root = document.querySelector(".root")
ReactDOM.render(App(), root );