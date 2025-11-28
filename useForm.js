import { useState } from "react";

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log("Input Changed:", name, "=", value);
  };

  const handleSubmit = (callback) => (e) => {
    e.preventDefault();
    console.log("Form Submitted:", values);
    callback(values);
  };

  return { values, handleChange, handleSubmit };
}

export default useForm;
