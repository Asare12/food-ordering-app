import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { register } from "../actions/auth";

const useForm = (callback, validate) => {
  const dispatch = useDispatch();

  const [values, setValue] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(false);
    
    setErrors(validate(values));
    dispatch(register(values.name, values.email, values.password))
    .then(() => {
      console.log("submitted form");
      setIsSubmitting(true);
      window.location.reload();
    })        
    .catch(() => {
      console.log("couldnt submit form");
      setIsSubmitting(false);
    });
  };

  useEffect(() => {
    if(Object.keys(errors).length === 0 && isSubmitting){
      callback(); 
    }
    console.log(JSON.stringify(values, null, 2));
  }, [errors]
  );
  return { handleChange, values, handleSubmit, errors };
};
export default useForm;
