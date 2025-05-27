import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import axios from "axios";

function Signup() {
  // redirect
  const goHome = useNavigate();

  // auth hook
  const { signUp, signUpWithGoogle } = useAuth();

  // react-hook-form

  const {
    register,
    formState: { errors },

    watch,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    const { email, password } = data;
    console.log(email,password);
    signUp(email, password)
      .then((res) => {
        // api for user
        axios
          .post("http://localhost:5000/api/register", 
            
            data
          )
          .then((res) => {
            toast.success("Successfully SignUp!");

            console.log(res.data);
            goHome("/");
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const btnForGoogle = () => {
    signUpWithGoogle()
      .then((res) => {
        
        const userData = {
          name: user.displayName || "Unknown",
          email: user.email,
          password: "Google-OAuth",
        };

        axios
          .post("http://localhost:5000/api/register",{ userData})
          .then((response) => {
            toast.success("Successfully Signed Up with Google");
            goHome("/");
          })
          .catch((error) => {
            console.error("Backend Error:", error);
            toast.error("Failed to save Google user");
          });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <div className="bg-slate-950">
      <div className="hero min-h-screen">
        <ToastContainer />

        <div className="card bg-slate-300 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="flex gap-y-4 flex-col">
              <div>
                <label
                  className="label

                  font-medium
                  
                  text-black"
                >
                  Name
                </label>

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
                <label
                  className="label 
                  
                  font-medium
                  
                  text-black"
                >
                  Email
                </label>
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
            <button className="btn mb-2" onClick={btnForGoogle}>
              Goole Sign up
            </button>

            <p className="mb-6 text-xl">
              You have already account{" "}
              <Link to={"/auth/signin"} className="text-blue-600 underline">
                Sign in{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
