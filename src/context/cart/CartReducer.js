import { ADD_TO_CART, DELETE_ITEM, INCREMENT, DECREMENT } from "../action";


const CartReducer = (state, action) => {
    switch(action.type) {
        case ADD_TO_CART: {

            // return {
            //     ...state,
            //     products: state.cartItem.map(product =>
            //       product.id === action.id ? {...product} : product,
            //     ),
            //   };
            

            // return {
            //     ...state,
            //     cartItem: state.cartItem.map(item =>
            //       item.id === action.id ? {...item } : item,
            //     ),
            //   };
              
            // const searchCart = state.cartItem.find(item => item.id !== action.id);
             

            const searchCart = state.cartItem.find(item => item.id === action.payload.id );
            console.log(searchCart, 'action.id')
            return searchCart ? state : {
                ...state,
                cartItem: [...state.cartItem, action.payload],
            };
            
            // return {
                
            //     ...state,
            //     cartItem: [...state.cartItem, action.payload]
            // }
        }
        case DELETE_ITEM: {
            return {
                ...state,
                cartItem: state.cartItem.filter(item => item.id 
                !== action.payload),

            
            };
        }

        case INCREMENT: {
            const qtyy = state.cartItem.find(item => item.id === action.payload.id );
          

            return qtyy?  {
                ...state,
                cartItem: [...state.cartItem, cartItem.qty += 1]
             
              } : state;

              
            // return searchCart?  {
            //     ...state,
            //     cartItem: state.cartItem.find(item =>
            //       item.id === action.payload.id
            //         ? {...item, qty: item.qty + 1}
            //         : item,
            //     ),
            //   };
            
            // return {
            //     ...state,
                
            //     cartItem: state.cartItem.qty + 1,
               
            // }
        }

        case DECREMENT: {
            return {

                ...state,
                items: state.items.map(item =>
                item.id === action.id
                    ? {...item,
                        qty: item.quantity !== 1 ? item.quantity - 1 : 1, }
                : item,
        ),
                // ...state,
                // cartItem: state.cartItem.qty - 1
            }
        }

        default:
            return state
    }
        
    
}

export default CartReducer;