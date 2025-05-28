import React, { useEffect, useState } from "react";
import api from "../hooks/PrivateAPi";
import useAuth from "../hooks/useAuth";
import { PureComponent } from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

function DashBoard() {
  const { user } = useAuth();

  const [data, setdata] = useState([]);

  //   const [data2, setdata2] = useState([]);

  //   useEffect(() => {
  //     const completedTask = api.get(`/api/dashboad?email=${user?.email}`);
  //     completedTask
  //       .then((res) => {
  //         console.log(res.data);
  //         setdata(res.data);
  //       })
  //       .catch((error) => {
  //         console.log(error.data);
  //       });
  //   }, [user?.email]);

  //    useEffect(() => {
  //     const completedTask = api.get(`/api/total-task?email=${user?.email}`);
  //     completedTask
  //       .then((res) => {
  //         console.log(res.data);
  //         setdata2(res.data);
  //       })
  //       .catch((error) => {
  //         console.log(error.data);
  //       });
  //   }, [user?.email]);

  //   console.log(data,data2);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const [completedRes, totalRes] = await Promise.all([
          api.get(`/api/dashboard?email=${user?.email}`),
          api.get(`/api/total-task?email=${user?.email}`),
        ]);

        const completed = completedRes.data.completedtask;
        const total = totalRes.data.totalTask;
        const remaining = total - completed;

        setdata([
          { name: "Completed", value: completed },
          { name: "Remaining", value: remaining },
        ]);
      } catch (err) {
        console.log(err);
      }
    };

    if (user?.email) {
      fetchChartData();
    }
  }, [user?.email]);

  return (
    <div className="border flex justify-center items-center flex-col">
      <h2 className="text-4xl   mt-5 text-center font-semibold text-white">
        Your Task status
      </h2>

      {data.length==0 && <p className="text-3xl font-semibold text-white text-center">No Task Founed</p>}
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
          data={data}
          cx={500}
          cy={200}
          innerRadius={40}
          outerRadius={80}
          fill="#82ca9d"
        />
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default DashBoard;
