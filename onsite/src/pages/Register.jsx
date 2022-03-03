import "./Register.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Register() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
    <div className="register">
<form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Name" /><br/>
	  <input {...register("email")} placeholder="email"/><br/>
	  <input {...register("password")} placeholder="password" /><br/>
      <input className="button" type="submit" value="Register"/>
    </form>
    <span>Already have an account?</span><br/>
	<Link to="/">Login</Link>
  </div>
    </>
  );
}
export default Register;
