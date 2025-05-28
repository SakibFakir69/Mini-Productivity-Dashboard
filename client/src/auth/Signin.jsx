import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

function Signin() {
  // navigate
  const goHome = useNavigate();

  // auth
  const { signIniWithEmailAndPassword, signInWithGoole } = useAuth();

  // react-hook-form

  const {
    register,
    formState: { errors },

    watch,
    handleSubmit,
  } = useForm();

  // email , password

  const onSubmit = (data) => {
    console.log(data);

    const { email, password } = data;

    signIniWithEmailAndPassword(email, password)
      .then((res) => {
        axios
          .post("http://localhost:5000/api/login-jwt")
          .then((res) => {
            const { token, email, password } = res.data;
            console.log(token,email);
            localStorage.setItem("token", token);

            toast.success("Sucessfully Sign Up!");
            goHome("/");
          })
          .catch((error) => {
            console.log(error);
            toast.error(error.message);
          });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  // google

  const btnForGoogle = () => {
    signInWithGoole()
      .then((res) => {
        axios
          .post("http://localhost:5000/api/login-jwt")
          .then((res) => {
            const { token, email, password } = res.data;
            console.log(token);
            localStorage.setItem("token", token);
            toast.success("Sucessfully Sign Up!");
            goHome("/");
          })
          .catch((error) => {
            console.log(error);
            toast.error(error.message);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen  bg-slate-950 w-full">
      <ToastContainer position="top-center" autoClose={2000} />
      <section className="flex justify-center items-center py-40 w-full">
        <div className="card bg-slate-300  w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="flex gap-y-4 flex-col">
              <div>
                <label className="label">Email</label>
                <input
                  type="email"
                  placeholder="Enter your Gmail"
                  className="input focus:outline-none focus:border-none focus:ring-0"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="label">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input focus:outline-none focus:border-none focus:ring-0"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <button className="btn btn-neutral mt-4">Login</button>
            </div>
          </form>

          {/* or */}

          <div className="text-center mb-5">
            <div className="divider divider-success -mt-3 mb-3">or</div>
            <button className="btn btn-accent" onClick={btnForGoogle}>
              Goole login{" "}
            </button>

            <p className="text-xl mt-4">
              You have no account{" "}
              <Link to="/auth/signup" className="text-blue-600 underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signin;
