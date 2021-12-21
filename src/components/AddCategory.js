import React, { useState } from "react";
import CategoryDataService from "../services/category.service";
import { Container } from "react-bootstrap";
import "../componentsCss/CategoryForm.css";

const AddCategory = () => {
  const initialCategoryState = {
    id: null,
    name: "",
  };
  const [category, setCategory] = useState(initialCategoryState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCategory({ ...category, [name]: value });
  };

  const saveCategory = () => {
    var data = {
      name: category.name,
    };

    CategoryDataService.create(data)
      .then((response) => {
        setCategory({
          id: response.data.id,
          name: response.data.name,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newCategory = () => {
    setCategory(initialCategoryState);
    setSubmitted(false);
  };

  return (
    <Container>
        <h1 style={{textAlign: "center", marginTop: "5%"}}> Create New Category</h1>
        <div className="addCategoryForm">
          {submitted ? (
            <div>
              <h1 style={{textAlign: "center", marginTop: "5%"}}>You added category successfully!</h1>
              <div class="form-row d-flex justify-content-center">
              <button className="btn btn-success" onClick={newCategory}>
                Add
              </button>
              </div>
            </div>
          ) : (
            <div>
                <div class="row d-flex justify-content-center"> 
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-control"
                        id="name"
                        required
                        value={category.name}
                        onChange={handleInputChange}
                        name="name"
                        />
                    </div>
                </div>
              <div class="form-row d-flex justify-content-center">
                <button onClick={saveCategory} className="btn btn-success">
                    Submit
                </button>
              </div>
            </div>
          )}
        </div>
    </Container>
  );
};

export default AddCategory;
