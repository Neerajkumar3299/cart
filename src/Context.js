import { useReducer,useContext ,createContext, useEffect} from "react";
import Reducer from "./Reducer";
import cartList from "./data"
const AppContext=createContext();
const initialState={
    cart:[],
    loading:true,
    amount:0,
    total:0
}
const AppProvider=({children})=>{
    const url = "https://course-api.com/react-useReducer-cart-project";
    const [state, dispatch] = useReducer(Reducer, initialState);
    const remove=(id)=>{
        dispatch({type:"REMOVE",payload:id});
    }
    const clearCart=()=>{
        dispatch({type:"CLEAR_ALL"})
    }
    const increase=(id)=>{
        dispatch({type:"INCREASE",payload:id});
        
    }
    const decrease=(id)=>{
        dispatch({ type: "DECREASE", payload: id });
    }
    const fetchData=async()=>{
        dispatch({type:"SET_LOADING",payload:true})
        const response = await fetch(url);
        const data=await response.json();
        dispatch({type:"SET_CART",payload:data})

    }
    useEffect(()=>{
        fetchData();
    },[])
    useEffect(()=>{
        dispatch({type:"CALCULATE_AMOUNT"})
    },[state.cart])
    return (
      <AppContext.Provider
        value={{
          ...state,
          remove,
          clearCart,
          increase,
          decrease,
        }}
      >
        {children}
      </AppContext.Provider>
    );
}

const useGlobalContext=()=>useContext(AppContext)
export {useGlobalContext,AppProvider}