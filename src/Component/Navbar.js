import {BsFillHandbagFill} from "react-icons/bs"
import "./Navbar.css"
import { useGlobalContext } from "../Context"
function Navbar(){
    const {amount}=useGlobalContext();
    return(
        <>
            <div className="nav">
                <div className="header">
                    <h1>Coding <span>Aan</span></h1>
                </div>
                <div className="cart">
                    <div className="cart-icon-container">
                        <BsFillHandbagFill id="cart-icon"/>
                        <div className="amount-container">
                            <p>{amount}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar