// step 2 reducer
import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
} from "./Products.action";

// initialState (oldState)
const initialState = {
  isLoading: false,
  products: [],
  error: null,
};
//? reducer for set state
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      debugger;
      // ?   if was post add products
      //*   case ADD_PRODUCTS:
      return { ...state, isLoading: true };
      
      case GET_PRODUCTS_SUCCESS:
      debugger;
      return { ...state, isLoading: false };
      
      case GET_PRODUCTS_FAILURE:
      debugger;
      //* case ADD_PRODUCTS_FAILURE:
      return { ...state, isLoading: false, error: payload };
      
      //   case ADD_PRODUCTS_SUCCESS:
      //   return {
        //     ...state,
        //     isLoading: false,
        //     products: [...state.products, payload],
    //   };

    default:
      return state;
  }
};

//! Do not subscribe loading for managment data ADD_PRODUCTS_SUCCESS GET_PRODUCTS_SUCCESS
