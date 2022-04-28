//step 1
//? Action Type
export const GET_PRODUCTS = "GET_PRODUCTS"; //pending
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS"; //success
export const GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE"; // fail
//*actions
//? ------------------------ actions for get products ------------------------ */
//Pending
export const getProducts = (payload) => ({
    type: GET_PRODUCTS,
    payload,
});
//success
export const getProductsSuccess = (payload) => ({
    type: GET_PRODUCTS_SUCCESS,
    payload,
});
//failure
export const getProductsFailure = (payload) => ({
    type: GET_PRODUCTS_FAILURE,
  payload,
});
//? ------------------------ actions for get products ------------------------ */
