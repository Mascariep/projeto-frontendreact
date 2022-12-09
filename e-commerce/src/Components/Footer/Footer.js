import { MainFooter } from "./styleFooter"
import github from "../../assets/github.svg"
import linkedin from "../../assets/linkedin.svg"

function Footer(){
    return (

        <MainFooter>
            <div className="footer">
                <div>
                    <a href="https://github.com/Mascariep" target="_blank"><img src={github} alt="icon-github"/></a>
                    <a href="https://www.linkedin.com/in/%C3%A9dipo-mascari-83960b9a/" target="_blank"><img src={linkedin} alt="icon-linkedin"/></a>
                </div>
                
                <div>
                    <p>Desenvolvido por Édipo Mascari</p>
                </div>
            </div>
        </MainFooter>
    )
}

export default Footer
