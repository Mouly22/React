import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import './Graph.css';

const food_data = [
  { name: "Cumilla", Jute: 6789, Rice: 4567, Wheat: 2345, Maize: 7890, Potao: 5678, area: 3456 },
  { name: "Rangpur", Jute: 1234, Rice: 5678, Wheat: 2345, Maize: 6789, Potao: 4567, area: 3456 },
  { name: "Pabna", Jute: 2345, Rice: 6789, Wheat: 1234, Maize: 4567, Potao: 7890, area: 5678 },
  { name: "Dhaka", Jute: 3456, Rice: 7890, Wheat: 2345, Maize: 5678, Potao: 1234, area: 6789 },
  { name: "Faridpur", Jute: 4567, Rice: 1234, Wheat: 3456, Maize: 6789, Potao: 2345, area: 7890 },
  { name: "Kulna", Jute: 5678, Rice: 2345, Wheat: 4567, Maize: 1234, Potao: 3456, area: 6789 },
  { name: "Rajsahi", Jute: 6789, Rice: 3456, Wheat: 5678, Maize: 2345, Potao: 7890, area: 1234 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function Example() {
  const [selectedFood, setSelectedFood] = useState("Rice");
  const foodData = food_data.map(({ name, ...rest }) => ({ name, value: rest[selectedFood] }));

  return (
    <div className='graph'>
      <div>
        <h1>
          <b>Pie Chart of Food Production</b>
        </h1>
        <select value={selectedFood} onChange={(e) => setSelectedFood(e.target.value)}>
          <option value="Rice">Rice</option>
          <option value="Jute">Jute</option>
          <option value="Wheat">Wheat</option>
          <option value="Maize">Maize</option>
          <option value="Potato">Potato</option>
        </select>
        <PieChart width={600} height={400}>
          <Pie
            data={foodData}
            cx={200}
            cy={200}
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
          >
            {foodData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
      <div>
        <h1>
          <b>Bar Chart of Foods</b>
        </h1>
        <BarChart
          width={500}
          height={300}
          data={food_data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Rice" fill="#6B5B95" />  // Dark Purple
          <Bar dataKey="Jute" fill="#6B8E23" />  // Olive Green
          <Bar dataKey="Wheat" fill="#008080" /> // Teal
          <Bar dataKey="Maize" fill="#6A5ACD" /> // Slate Blue
          <Bar dataKey="Potato" fill="#8B4513" /> // Saddle Brown
        </BarChart>
      </div>
    </div>
  );
}
