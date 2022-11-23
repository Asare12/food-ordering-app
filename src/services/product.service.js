import http from "../http-common";

  const getProductsByCategoryId = (id, param) => {
    console.log('getAllProductsByCategoryId', id);
    return http.get(`/category/${id}/products`, param);
  };
  
  const create = (categoryID, data) => {
    return http.post(`/category/${categoryID}/product`, data);
  };
  
  const update = (categoryID,productID, data) => {
    return http.put(`/${categoryID}/updateProduct/${productID}`, data);
  }; 
  const remove = (categoryID,productID) => {
    return http.delete(`/${categoryID}/deleteProduct${productID}`);
  };


const ProductDataService = {
    getProductsByCategoryId,
    create,
    update,
    remove
    //removeAll,
    //findByTitle,
  };
  
  export default ProductDataService;