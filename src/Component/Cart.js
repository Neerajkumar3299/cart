
import Loading from "./Loading"
import CartItem from "./CartItem";
import "./Cart.css"
import { useGlobalContext } from "../Context"
function Cart(){
    const {cart,loading,clearCart,total}=useGlobalContext();
    if(loading){
        return(
            <>
                <Loading/>
            </>
        )
    }
    else{
        return (
          <>
            <div className="cart-container">
              <h1>Your bag</h1>
              {cart.length == 0 ? (
                <p>Your Cart is Empty!!</p>
              ) : (
                <>
                  <div className="cart-list">
                    {
                        cart.map((cartItem)=>{
                            return <CartItem data={{...cartItem}}/>
                        })
                    }
                  </div>
                  <div className="horizontal-line"></div>
                  <footer className="footer">
                    <p>Total</p>
                    <p>${total}</p>
                  </footer>
                  <button id="clear-cart" onClick={clearCart}>Clear Cart</button>
                </>
              )}
            </div>
          </>
        );
    }
}
export default Cart