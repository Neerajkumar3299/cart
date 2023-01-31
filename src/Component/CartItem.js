import "./CartItem.css"
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { useGlobalContext } from "../Context";
function CartItem({data}){
    const {id,title,price,img,amount}=data;
    const {remove,increase,decrease}=useGlobalContext();
    return(
        <>
            <div className="cart-item" key={id}>
                <img src={img} alt="image" />
                <div className="cart-info">
                    <h3>{title}</h3>
                    <h4>${price}</h4>
                    <button onClick={()=>remove(id)}>remove</button>
                </div>
                <div className="increase-decrease">
                    <AiOutlineArrowUp id="up" onClick={()=>increase(id)}/>
                    <p>{amount}</p>
                    <AiOutlineArrowDown id="down" onClick={()=>decrease(id)}/>
                </div>
            </div>
        </>
    )
}
export default CartItem