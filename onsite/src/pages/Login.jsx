import "./Login.css"
import {Link} from "react-router-dom"
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
    <div className="login">
<form onSubmit={handleSubmit(onSubmit)}>
	  <input {...register("email")} placeholder="email"/>
	  <input {...register("password")} placeholder="password" />
      <input className="button" type="submit" value="Login"/>
    </form>
     <span>Do not have an account?</span><br/>
     <Link to="register">Register here</Link> 
     </div>
    </>
  );
}
export default Login;