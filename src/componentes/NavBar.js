import CartWidget from "./CartWidget";
import "./NavBar.css"

function NavBar(){

return(
    <div className="navbarra">
            <label className="logo">Guayacan</label>
            <ul className="items">
                <li>
                    <a href="#">Home</a>
                    <a href="#">Productos</a>
                    <a href="#">Quienes somos</a>
                    <a href="#">Contacto</a>
                </li>
                <li className="carrito"><CartWidget/></li>
            </ul>   
    </div>
)
}

export default NavBar;