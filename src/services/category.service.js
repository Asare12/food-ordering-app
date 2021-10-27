import http from "../http-common";

const getAll = () => {
    return http.get("/category");
  };
  
  const get = id => {
    return http.get(`/category/${id}`);
  };
  
  const create = data => {
    return http.post("/category", data);
  };
  
  const update = (id, data) => {
    return http.put(`/category/update/${id}`, data);
  };
  
  const remove = id => {
    return http.delete(`/category/delete${id}`);
  };


const CategoryService = {
    getAll,
    get,
    create,
    update,
    remove
    //removeAll,
    //findByTitle,
  };
  
  export default CategoryService;