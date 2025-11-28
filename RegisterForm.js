import useForm from "./useForm";

function RegisterForm() {
  const { values, handleChange, handleSubmit } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const submitRegister = () => {
    alert("Registration Successful!");
  };

  return (
    <form onSubmit={handleSubmit(submitRegister)}>
      <h2>Student Registration</h2>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={values.name}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={values.email}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={values.password}
        onChange={handleChange}
      />

      <br /><br />

      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
