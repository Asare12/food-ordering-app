import {
    CREATE_PRODDUCT,
    RETRIEVE_PRODUCTS,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
  } from "../actions/types";

  const initialState = [];

  function productReducer(products = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_PRODDUCT:
        return [...products, payload];
  
      case RETRIEVE_PRODUCTS:
        return payload;
  
      case UPDATE_PRODUCT:
        return products.map((product) => {
          if (product.id === payload.id) {
            return {
              ...product,
              ...payload,
            };
          } else {
            return product;
          }
        });
  
      case DELETE_PRODUCT:
        return products.filter(({ id }) => id !== payload.id);
  
    //   case DELETE_ALL_TUTORIALS:
    //     return [];
  
      default:
        return products;
    }
  };
  
  export default productReducer;