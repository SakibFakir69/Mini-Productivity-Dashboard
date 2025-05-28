import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import api from "../hooks/PrivateAPi";
function Task() {


  // refresh  task auto update
  // active link 
  // all function check
  // bug fix 
  // remove google
  // polish input task , update real timetask 
  // text
  const { user } = useAuth();

  const [tasks, settasks] = useState([]);
  //   edit

  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editData, setEditData] = useState({
    title: "",
    description: "",
    frequency: "",
  });

  const startEdit = (task) => {
    setEditingTaskId(task._id);
    setEditData({
      title: task.title,
      description: task.description,
      frequency: task.frequency,
    });
  };
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };
  const saveEdit = (id) => {
    axios
      .patch(`https://server-ruby-theta.vercel.app/api/tasks/${id}`, editData)
      .then(() => {
        toast.success("Task updated!");

        // update local state
        settasks((prev) =>
          prev.map((task) =>
            task._id === id ? { ...task, ...editData } : task
          )
        );

        setEditingTaskId(null); // exit edit mode
      })
      .catch((err) => {
        console.error(err);
        toast.error("Update failed");
      });
  };
  const cancelEdit = () => {
    setEditingTaskId(null);
    setEditData({ title: "", description: "", frequency: "" });
  };

  useEffect(() => {
    if (!user?.email) return;
    const token =
      localStorage.getItem("token") || localStorage.getItem("access_token");

    api
      .get(
        `api/tasks/${user?.email}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        settasks(res?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user?.email]);
  console.log(tasks, " tasks");

  //   filter
  const weeklytasks = tasks.filter((item) => item.frequency === "Weekly");
  const monthlytasks = tasks.filter((item) => item.frequency === "Monthly");
  const dailytasks = tasks.filter((item)=> item.frequency==='Daily');


  //   iscompleted
  const handleCompleteToggle = (id, currentStatus) => {
    const updatedStatus = !currentStatus;

    api
      .patch(`api/tasks/${id}`, {
        iscompleted: updatedStatus,
      })

      .then(() => {
        // Optional: toast message
        // toast.success("Task updated!");

        // Update local state
        settasks((prevTasks) =>
          prevTasks.map((task) =>
            task._id === id ? { ...task, iscompleted: updatedStatus } : task
          )
        );
      })
      .catch((error) => {
        console.error("Error updating task:", error);
        toast.error("Failed to update task!");
      });
  };

  //   delete

  const deleteTask = (id) => {
    api
      .delete(`api/tasks/${id}`)
      .then((res) => {
        console.log(res.data);
        toast.success("Task Deleted");

        // Remove from local state after deletion
        settasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

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

    const { title, description, frequency } = data;

    const alldata = {
      title,
      description,
      frequency,
      email: user?.email,
    };


    api
      .post("api/tasks", alldata)
      .then((res) => {
        console.log(res.data);

        settasks((prev) => [...prev, res?.data]);

        toast.success("Task add", { autoClose: 2000 });
      })
      .catch((err) => {
        console.log(err.message);
        toast.error("task added failed", { autoClose: 2000 });
      });

    if (myModal.current) {
      myModal.current.checked = false;
    }

    reset();
  };

  const modalcancel = () => {
    // empty value
    reset();
    myModal.current.checked = false;
  };

  return (
    <div className="w-full p-4 min-h-screen">
      {/* here implement goal weekly and monthly */}
      <ToastContainer />

      <div className="flex p-2  justify-between">
        <h3 className="text-xl font-semibold text-white">My Goals</h3>

        {/* The button to open modal */}
        <label htmlFor="my_modal_6" className="btn">
          Add Task
        </label>

        {/* Put this part before </body> tag */}
        <input
          type="checkbox"
          id="my_modal_6"
          className="modal-toggle"
          ref={myModal}
        />
        <div className="modal" role="dialog">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="modal-box flex flex-col gap-y-2"
          >
            <h3 className="text-lg font-bold text-center">Enter Your Task!</h3>

            <input
              {...register("title", { required: true })}
              placeholder="Enter your title"
              className="border px-2 py-1 w-full"
            />

            {errors.title && <p className="text-red-400">Enter title</p>}
            <textarea
              {...register("description", { required: true })}
              placeholder="Enter your descruption"
              className="border px-2  w-full min-h-20"
            />
            {errors.description && (
              <div className="text-red-400">Enter Description</div>
            )}

            <select
              {...register("frequency", { required: true })}
              className="border px-2 py-1 w-full"
            >
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </select>
            {errors.frequency && (
              <p className="text-red-500">Enter frequency</p>
            )}

            <div className="modal-action">
              <button type="submit" htmlFor="my_modal_6" className="btn">
                Submit
              </button>

              <button className="btn" onClick={modalcancel}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>

      <section className="grid md:grid-cols-3 gap-5 ">


        <div>
          <div>
            <h2 className="text-white ">Daily task</h2>
          </div>

          {/*  */}

          <div>
             <div className="grid grid-cols-1 gap-y-4">
              {dailytasks.map((item, key) => (
                <div
                  className="border   min-h-20  bg-slate-900 shadow-2xl border-teal-400/20 rounded p-5"
                  key={key}
                >
                  {editingTaskId === item._id ? (
                    <div className="flex flex-col gap-y-2">
                      <input
                        name="title"
                        value={editData.title}
                        onChange={handleEditChange}
                        className="input input-bordered w-full"
                      />
                      <textarea
                        name="description"
                        value={editData.description}
                        onChange={handleEditChange}
                        className="textarea textarea-bordered w-full"
                      />
                      <select
                        name="frequency"
                        value={editData.frequency}
                        onChange={handleEditChange}
                        className="select select-bordered w-full"
                      >
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                      </select>
                      <div className="flex gap-x-2 mt-2">
                        <button
                          onClick={() => saveEdit(item._id)}
                          className="btn btn-success"
                        >
                          Save
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="btn btn-warning"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col ">
                      <p className="text-white font-semibold">{item.title}</p>
                      <p className="text-stone-200">{item.description}</p>
                      <input
                        type="checkbox"
                        className="size-5"
                        checked={item.iscompleted}
                        onChange={() =>
                          handleCompleteToggle(item._id, item.iscompleted)
                        }
                      />
                      <div className="flex gap-x-5 mt-2">
                        <button
                          className="btn btn-info"
                          onClick={() => startEdit(item)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-error"
                          onClick={() => deleteTask(item._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
          </div>

        </div>







        <div className="border border-teal-400/10 p-3">
          <h2 className="text-white font-xl font-semibold text-center">
            Weekly Goals
          </h2>
          {weeklytasks.length === 0 && (
            <p className="text-gray-400 text-center">No weekly tasks found</p>
          )}

          <div className="grid grid-cols-1 gap-4 ">
            {weeklytasks.map((item, key) => (
              <div
                className="border border-teal-400/20  min-h-20  bg-slate-900 shadow-2xl p-2 rounded"
                key={key}
              >
                {editingTaskId === item._id ? (
                  <div className="flex flex-col gap-y-2">
                    <input
                      name="title"
                      value={editData.title}
                      onChange={handleEditChange}
                      className="input input-bordered w-full"
                    />
                    <textarea
                      name="description"
                      value={editData.description}
                      onChange={handleEditChange}
                      className="textarea textarea-bordered w-full"
                    />
                    <select
                      name="frequency"
                      value={editData.frequency}
                      onChange={handleEditChange}
                      className="select select-bordered w-full"
                    >
                      <option value="Daily">Daily</option>
                      <option value="Weekly">Weekly</option>
                      <option value="Monthly">Monthly</option>
                    </select>
                    <div className="flex gap-x-2 mt-2">
                      <button
                        onClick={() => saveEdit(item._id)}
                        className="btn btn-success"
                      >
                        Save
                      </button>
                      <button onClick={cancelEdit} className="btn btn-warning">
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-x-5">
                    <p className="text-white font-semibold text-xl">{item.title}</p>
                    <p className="text-stone-200">{item.description}</p>

                    <input
                      type="checkbox"
                      className="size-5"
                      checked={item.iscompleted}
                      onChange={() =>
                        handleCompleteToggle(item._id, item.iscompleted)
                      }
                    />
                    <div className="flex gap-x-5 mt-2">
                      <button
                        className="btn btn-info "
                        onClick={() => startEdit(item)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-error"
                        onClick={() => deleteTask(item._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="border border-teal-400/10 p-3">
          <h2 className="text-white font-xl font-semibold text-center mt-2 rounded">
            Monthly Goals
          </h2>

          <div>
            {monthlytasks.length === 0 && (
              <p className="text-gray-400 text-center">
                No Monthly tasks found
              </p>
            )}

            <div className="grid grid-cols-1 gap-y-4">
              {monthlytasks.map((item, key) => (
                <div
                  className="border   min-h-20  bg-slate-900 shadow-2xl border-teal-400/20 rounded p-5"
                  key={key}
                >
                  {editingTaskId === item._id ? (
                    <div className="flex flex-col gap-y-2">
                      <input
                        name="title"
                        value={editData.title}
                        onChange={handleEditChange}
                        className="input input-bordered w-full"
                      />
                      <textarea
                        name="description"
                        value={editData.description}
                        onChange={handleEditChange}
                        className="textarea textarea-bordered w-full"
                      />
                      <select
                        name="frequency"
                        value={editData.frequency}
                        onChange={handleEditChange}
                        className="select select-bordered w-full"
                      >
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                      </select>
                      <div className="flex gap-x-2 mt-2">
                        <button
                          onClick={() => saveEdit(item._id)}
                          className="btn btn-success"
                        >
                          Save
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="btn btn-warning"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col ">
                      <p className="text-white font-semibold">{item.title}</p>
                      <p className="text-stone-200">{item.description}</p>
                      <input
                        type="checkbox"
                        className="size-5"
                        checked={item.iscompleted}
                        onChange={() =>
                          handleCompleteToggle(item._id, item.iscompleted)
                        }
                      />
                      <div className="flex gap-x-5 mt-2">
                        <button
                          className="btn btn-info"
                          onClick={() => startEdit(item)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-error"
                          onClick={() => deleteTask(item._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Task;
