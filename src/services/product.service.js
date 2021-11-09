import http from "../http-common";

const getAll = () => {
    return http.get("/product");
  };
  
  const get = id => {
    return http.get(`/product/${id}`);
  };
  
  const create = data => {
    return http.post("/product", data);
  };
  
  const update = (id, data) => {
    return http.put(`/product/update/${id}`, data);
  }; 
  const remove = id => {
    return http.delete(`/product/delete${id}`);
  };


const ProductDataService = {
    getAll,
    get,
    create,
    update,
    remove
    //removeAll,
    //findByTitle,
  };
  
  export default ProductDataService;