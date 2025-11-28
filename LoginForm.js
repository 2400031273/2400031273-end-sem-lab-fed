import useForm from "./useForm";

function LoginForm() {
  const { values, handleChange, handleSubmit } = useForm({
    email: "",
    password: "",
  });

  const submitLogin = () => {
    alert("Login Successful!");
  };

  return (
    <form onSubmit={handleSubmit(submitLogin)}>
      <h2>Student Login</h2>

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

      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
