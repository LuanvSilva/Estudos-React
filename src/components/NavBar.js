import { Link } from "react-router-dom"
import {FaFacebook} from "react-icons/fa" 

function NavBar(){
    return(
      
        <ul>
        <li>
          <Link to="/Home">Home</Link>
          
        </li>
        <li>
        <Link to="/Empresa">Empresa</Link>
        </li>
        <li>
        <Link to="/Contato">Contato</Link>
        </li>
      </ul>

    )
}
export default NavBar