import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Signup() {
  const {
    register,

    watch,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <fieldset className="fieldset">
                <label className="label">Name</label>

                <input defaultValue="test" {...register("Name")} />

                <label className="label">Email</label>
                <input defaultValue="Email" {...register("Email")} />

                <label className="label">Password</label>
                <input defaultValue="Password" {...register("Password")} />

                <button className="btn btn-neutral mt-4">Sign Up</button>
              </fieldset>
            </form>

            <div className="mt-6">
              <p>You have already account <Link to={'/auth/siginin'}>Sign in </Link></p>
                <div className="divider divider-success">Success</div>
                <button>Goole login</button>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
