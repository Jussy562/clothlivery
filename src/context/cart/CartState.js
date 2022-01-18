import { useReducer } from 'react';
import CartContext from './CartContext';
import CartReducer from './CartReducer';
import { ADD_TO_CART, DELETE_ITEM, INCREMENT, DECREMENT, } from '../action';

const CartState = ({children}) => {

    const initialState = {
        cartItem: [],
        totalPrice: 0,
    }

    const [state, dispatch] = useReducer(CartReducer, initialState);
    
    const addToCart = item => {
        dispatch({type: ADD_TO_CART, payload: item})
    }

    const deleteItem = id => {
        dispatch({type: DELETE_ITEM, id})
    }

    const increment = id => {
        dispatch({type: INCREMENT, id})
    }

    const decrement = id => {
        dispatch({type: DECREMENT, id})
    }
    return (
        <CartContext.Provider value={{
            cartItem: state.cartItem,
            addToCart,
            deleteItem,
            increment,
            decrement,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartState;