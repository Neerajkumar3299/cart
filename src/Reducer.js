function Reducer(state,action){
    if(action.type==="REMOVE"){
        return {...state,cart:state.cart.filter((cartItem)=>{
            if(cartItem.id!==action.payload){
                return cartItem
            }
        })}
    }
    if(action.type==="CLEAR_ALL"){
        return {...state,cart:[]}
    }
    if(action.type==="INCREASE"){
        return {...state,cart:state.cart.map((cartItem)=>{
            if(cartItem.id===action.payload){
                return {...cartItem,amount:cartItem.amount+1}
            }
            return cartItem
        })}
    }
    if (action.type === "DECREASE") {
      return {
        ...state,
        cart: state.cart.map((cartItem) => {
          if (cartItem.id === action.payload) {
            return {...cartItem,amount:cartItem.amount-1}
          }
          return cartItem;
        }).filter((cartItem)=>cartItem.amount!==0),
      };
    }
    if(action.type==="CALCULATE_AMOUNT"){
        let {amount,total}=state.cart.reduce((cartTotal,cartItem)=>{
            // console.log(cartTotal)
            cartTotal.total+=cartItem.price*cartItem.amount;
            cartTotal.amount+=cartItem.amount;
            return cartTotal
        },{amount:0,total:0})
        total=parseFloat(total.toFixed(2));
        return {...state,amount,total}
    }
    if(action.type==="SET_LOADING"){
        return {...state,loading:action.payload}
    }
    if(action.type==="SET_CART"){
        return {...state,cart:action.payload,loading:false}
    }
    return state
}
export default Reducer