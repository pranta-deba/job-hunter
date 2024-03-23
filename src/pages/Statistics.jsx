import { useLoaderData } from "react-router-dom";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { getAppliedJobs } from "../utils/localStorage";

const Statistics = () => {
  const jobs = useLoaderData();
  const appliedJobs = getAppliedJobs();
  const data = [
    {
      name: "Total jobs",
      value: jobs.length,
    },
    {
      name: "Applied jobs",
      value: appliedJobs.length,
    },
  ];
  const COLORS = ["#4A00FF", "#2B3440"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
   <>
    <div className="py-20 md:py-28 flex justify-center items-center detailsBg">
        <h1 className="text-3xl font-extrabold">Statistics</h1>
      </div>
    <div className="w-full h-[70vh] mb-10">
      <ResponsiveContainer>
        <PieChart width={600} height={600}>
          <Tooltip></Tooltip>
          <Legend></Legend>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
   </>
  );
};

export default Statistics;
