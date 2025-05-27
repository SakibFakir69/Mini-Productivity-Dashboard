import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";

function Signup() {

  // redirect
  const goHome = useNavigate();

  // auth hook
  const {    signUp,
    signUpWithGoogle,} =useAuth();




  // react-hook-form


  const {
    register,
    formState: { errors },

    watch,
    handleSubmit,
  } = useForm();



  const onSubmit = (data) =>{

     console.log(data)

     const {name,email,password} = data;
     signUp(email,password)
     .then((res)=>{
      console.log(res.data);
      goHome('/');


     })
     .catch((error)=>{
      console.log(error);
     })
    
     

  }

  const btnForGoogle = ()=>{

    signUpWithGoogle()
    .then((res)=>{
      console.log(res.data);
      goHome('/')
    })
    .catch((error)=>{
      console.log(error);
    })

  }



  return (
    <div className="bg-slate-950">
      <div className="hero min-h-screen">

          
          <div className="card bg-slate-300 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="flex gap-y-4 flex-col" >
                <div>
                  <label className="label

                  font-medium
                  
                  text-black">Name</label>

                  <input
                  className="input focus:outline-none focus:border-none focus:ring-0"
                  placeholder="Enter your name"

                    {...register("name", {
                      required: "Name is required",
                    })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="label 
                  
                  font-medium
                  
                  text-black">Email</label>
                  <input
                   className="input focus:outline-none focus:border-none focus:ring-0"

                    placeholder="Enter your email"
                    {...register("email", {
                      required: "Enter Your email",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="label font-medium text-black">Password</label>
                  <input
                   className="input focus:outline-none focus:border-none focus:ring-0"

                    placeholder="Enter your password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <button className="btn btn-neutral mt-4">Sign Up</button>
              </div>
            </form>

            <div className="-mt-2 flex justify-center items-center flex-col">


               <div className="divider divider-success">or</div>
              <button className="btn mb-2" onClick={btnForGoogle}>Goole Sign up</button>

              <p className="mb-6 text-xl">
                You have already account{" "}
                <Link to={"/auth/signin"} className="text-blue-600 underline">Sign in </Link>
              </p>

             
            </div>
          </div>
 
      </div>
    </div>
  );
}


export default Signup;
