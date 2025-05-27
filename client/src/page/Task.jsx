import axios from "axios";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";



function Task() {

    // inlilne edit



    // modal

    const myModal = useRef();
  // task submit



  const {
    register,
    formState: { errors },
    reset,

    watch,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    axios.get('http://localhost:5000/api/tasks',data)
    .then((res)=>{
        console.log(res.data);
        toast.success('Task add')


    })
    .catch((err)=>{
        console.log(err.message);
        toast.error("task added failed")
    })



    

   if (myModal.current) {
      myModal.current.checked = false;
    }

    reset();



  };

  return (
    <div className="w-full p-4 min-h-screen">
      {/* here implement goal weekly and monthly */}
      <ToastContainer/>

      <div className="flex p-2  justify-between">
        <h3 className="text-xl font-semibold text-white">Today's Tasks</h3>

        {/* The button to open modal */}
        <label htmlFor="my_modal_6" className="btn">
          open modal
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my_modal_6" className="modal-toggle" ref={myModal}/>
        <div className="modal" role="dialog">
          <form onSubmit={handleSubmit(onSubmit)} className="modal-box flex flex-col gap-y-2">
            <h3 className="text-lg font-bold text-center">Enter Your Task!</h3>

            <input
              {...register("title", { required: true })}
              placeholder="Enter your title"
              className="border px-2 py-1 w-full"
            />

            {
                errors.title && <p className="text-red-400">Enter title</p>
            }
            <textarea
              {...register("description", { required: true })}
              placeholder="Enter your descruption"
              className="border px-2  w-full min-h-20"
            />
            {
                errors.description && <div className="text-red-400">Enter Description</div>
            }

            <select
              {...register("frequency", { required: true })}
              className="border px-2 py-1 w-full"
            >
              <option value="">Set your value</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
            {
                errors.frequency && <p className="text-red-500">Enter frequency</p>
            }

            <div className="modal-action">
              <button type="submit" htmlFor="my_modal_6" className="btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <section className="grid grid-cols-2 gap-5">
        <div>
          <h2 className="text-white font-xl font-semibold">Weekly Task</h2>

          <div className="border border-white min-h-20">
            <p className="text-white">hello this is my first task</p>
          </div>
        </div>

        <div>
          <h2 className="text-white font-xl font-semibold">Monthly Task</h2>

          <div className="border border-white min-h-20">
            <p className="text-white">hello this is my first task</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Task;
