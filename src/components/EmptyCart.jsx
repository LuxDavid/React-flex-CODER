import carritoVacio from '../assets/carritoVacio.png';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
const EmptyCart=()=>{

const navigate= useNavigate();

return(
<>
    <h2 id="cart-title">Parece que tu carrito esta vacio....</h2>
    <div id="empty-cart">
    <div><img src={carritoVacio} alt="carrito vacio"/></div>
        <Button size="lg" className="btn-emptyCart" onClick={() => navigate("/")}>Buscar productos</Button>
    </div>
   
</>
)


}

export default EmptyCart