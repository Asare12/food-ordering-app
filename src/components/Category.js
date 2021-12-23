import React, { useState, useEffect } from "react";
import CategoryDataService from "../services/category.service";
import { Container } from "react-bootstrap";

const Category = (props) => {
  const initialCategoryState = {
    id: null,
    name: "",
  };
  const [currentCategory, setCurrentCategory] = useState(initialCategoryState);
  //const [message, setMessage] = useState("");

  const getCategory = (id) => {
    CategoryDataService.get(id)
      .then((response) => {
        setCurrentCategory(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getCategory(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentCategory({ ...currentCategory, [name]: value });
  };

  const updateCategory = () => {
    CategoryDataService.update(currentCategory.id, currentCategory)
      .then((response) => {
        console.log(response.data);
        //setMessage("The category was updated successfully!");
        props.history.push("/admin");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Container>
      <h1 style={{ textAlign: "center", marginTop: "5%" }}> Update Category</h1>
      <div className="categoryForm">
        <div>
          <div class="row d-flex justify-content-center">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={currentCategory.name}
                onChange={handleInputChange}
                name="name"
              />
            </div>
          </div>
          <div class="form-row d-flex justify-content-center">
            <button onClick={updateCategory} className="btn btn-success">
              Update
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Category;
