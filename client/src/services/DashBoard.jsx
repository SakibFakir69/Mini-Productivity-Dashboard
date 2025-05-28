import React, { useEffect, useState } from "react";
import api from "../hooks/PrivateAPi";
import useAuth from "../hooks/useAuth";

function DashBoard() {
  const { user } = useAuth();

  const [ data , setdata ]= useState([]);

  useEffect(() => {
    const completedTask = api.get(`/taskboard/dashboad?email=${user?.email}`);
    completedTask
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  }, [user?.email]);

  return (
    <div>
      <h2 className="text-4xl   mt-5 text-center font-semibold text-white">
        Your Task status
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Pie
            dataKey="value"
            data={data02}
            cx={500}
            cy={200}
            innerRadius={40}
            outerRadius={80}
            fill="#82ca9d"
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DashBoard;
