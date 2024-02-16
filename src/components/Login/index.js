import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import useAuthContext from "@/providers/authenticator";



const Login = ()=>{
    
    
    const {
        reset,
      register,
      handleSubmit,
      formState: { errors }
    } = useForm();

    const router = useRouter();
    const {isAuthenticated, setIsAuthenticated} = useAuthContext();
    console.log('Login isAuthenticated :', isAuthenticated);


  
    const onSubmit = (values) => {

      if(values.email === 'a@b.com' && values.password === '123'){
        setIsAuthenticated(true);
        router.push('/home');
      }

      reset();
    };
  
    return (
        <div className="App">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label>Email</label>
            <input
              type="text"
              name="email"
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Email is not valid."
                }
              })}
            />
            {errors.email && <p className="errorMsg">{errors.email.message}</p>}
          </div>
          <div className="form-control">
            <label>Password</label>
            <input
              type="password"
              name="password"
              {...register("password", {
                required: "Password is required.",
                minLength: {
                  value: 3,
                  message: "Password should be at-least 3 characters."
                }
              })}
            />
            {errors.password && (
              <p className="errorMsg">{errors.password.message}</p>
            )}
          </div>
          <div className="form-control">
            <label></label>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
}

export default Login;