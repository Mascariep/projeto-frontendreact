import {MainHeader, Imagem} from "./styleHeader"
import fundo from "../../assets/galaxy.jpg";
import logo from "../../assets/Saturn.png"
import icone from "../../assets/key-icon.svg"

function Header(){

    return(
        <MainHeader style={{backgroundImage:`url(${fundo})`}}>
            
            <div>
                <Imagem src={logo} alt="planeta"/>   
            </div>

            <div>
                <p>SPACE SHOP</p>
            </div>

            <div>
                <img src={icone} alt="icone"/>
            </div>

        </MainHeader>
    )
}

export default Header