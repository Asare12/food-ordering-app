import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import ProductList from "./ProductList";
import CategoryList from "./CategoryList";
const BoardUser = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getAdminBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
        {/* <ProductList/> */}
        <CategoryList />

      </header>
    </div>
  );
};

export default BoardUser;