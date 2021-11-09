import {
    CREATE_PRODDUCT,
    RETRIEVE_PRODUCTS,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
  } from "./types";

  import ProductDataService from "../services/product.service";

  export const createProduct = (name, price, description) => async (dispatch) => {
    try {
      const res = await ProductDataService.create({ name, price, description });
  
      dispatch({
        type: CREATE_PRODDUCT,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const retrieveProducts = () => async (dispatch) => {
    try {
      const res = await ProductDataService.getAll();
  
      dispatch({
        type: RETRIEVE_PRODUCTS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  export const updateTutorial = (id, data) => async (dispatch) => {
    try {
      const res = await ProductDataService.update(id, data);
  
      dispatch({
        type: UPDATE_PRODUCT,
        payload: data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const deleteTutorial = (id) => async (dispatch) => {
    try {
      await ProductDataService.remove(id);
  
      dispatch({
        type: DELETE_PRODUCT,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };
  
//   export const deleteAllTutorials = () => async (dispatch) => {
//     try {
//       const res = await ProductDataService.removeAll();
  
//       dispatch({
//         type: DELETE_ALL_TUTORIALS,
//         payload: res.data,
//       });
  
//       return Promise.resolve(res.data);
//     } catch (err) {
//       return Promise.reject(err);
//     }
//   };
  
//   export const findTutorialsByTitle = (title) => async (dispatch) => {
//     try {
//       const res = await ProductDataService.findByTitle(title);
  
//       dispatch({
//         type: RETRIEVE_TUTORIALS,
//         payload: res.data,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };
