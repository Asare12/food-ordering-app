import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct} from "../actions/products";

const AddProduct = () => {
  const initialProductState = {
    id: null,
    name: "",
    description: "",
    price: ""
  };
  const [product, setProduct] = useState(initialProductState);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const saveProduct = () => {
    const { name, description, price } = tutorial;

    dispatch(createProduct(title, description))
      .then(data => {
        setTutorial({
          id: data.id,
          title: data.title,
          description: data.description,
          published: data.published
        });
        setSubmitted(true);

        console.log(data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newTutorial = () => {
    setTutorial(initialTutorialState);
    setSubmitted(false);
  };