import { ADD_TO_CART, DELETE_ITEM, INCREMENT, DECREMENT } from "../action";


const CartReducer = (state, action) => {
    switch(action.type) {
        case ADD_TO_CART: {

           
             

            const searchCart = state.cartItem.find(item => item.id === action.payload.id );
            
            return searchCart ? state : {
                ...state,
                cartItem: [...state.cartItem, action.payload],
                totalPrice: state.totalPrice + action.payload.price,
            };
            
          
        }
        case DELETE_ITEM: {
            return {
                ...state,
                cartItem: state.cartItem.filter(item => item.id 
                !== action.id),

            
            };
        }

        case INCREMENT: {
            // const qtyy = state.cartItem.find(item => item.id === action.payload.id );
            
            
            // const product = state.cartItem.find(item => item.id === action.id);
            // console.log(action.id);
            // const count = state.cartItem.find(item => item.id === action.id ? 

            //     {...item, name: item.name = 'blue'} : item);
            //     console.log(count.name);

                // {...item, qty: item.qty += 1} : item);
                // console.log(count.qty);
                
                
                // {...item, name: item.name= "blue"}               
            const count = state.cartItem.find(item => item.id === action.id);
            return count ? {
                ...state,
                cartItem:  state.cartItem.map(items => items.id === action.id ? 
                    {...items,
                    qty: items.qty + 1,
                     
                    } : items),
                     
              } : state;

              
              

              
      
        }

        case DECREMENT: {
            const count = state.cartItem.find(item => item.id === action.id);
            return count ? {
                ...state,
                cartItem:  state.cartItem.map(items => items.id === action.id ? 
                    {...items,
                    qty: items.qty > 1 ? items.qty - 1 : 1,
                     
                    } : items),
                     
              } : state;
        }

        default:
            return state
    }
        
    
}

export default CartReducer;