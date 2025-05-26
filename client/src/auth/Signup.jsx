import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Signup() {
  // react-hook-form
  const {
    register,
    formState: { errors },

    watch,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="bg-slate-950">
      <div className="hero min-h-screen">

          
          <div className="card bg-slate-300 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <fieldset className="fieldset">
                <div>
                  <label className="label">Name</label>

                  <input
                  className="input focus:outline-none focus:border-none focus:ring-0"

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
                  <label className="label">Email</label>
                  <input
                   className="input focus:outline-none focus:border-none focus:ring-0"

                    defaultValue="Email"
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
                  <label className="label">Password</label>
                  <input
                   className="input focus:outline-none focus:border-none focus:ring-0"

                    defaultValue="Password"
                    {...register("Password", {
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
              </fieldset>
            </form>

            <div className="-mt-2 flex justify-center items-center flex-col">


               <div className="divider divider-success">or</div>
              <button className="btn mb-2">Goole Sign up</button>

              <p className="mb-6 text-xl">
                You have already account{" "}
                <Link to={"/auth/signin"} className="text-blue-600">Sign in </Link>
              </p>

             
            </div>
          </div>
 
      </div>
    </div>
  );
}

export default Signup;
