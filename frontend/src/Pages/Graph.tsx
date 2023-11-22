import React, { useState, useEffect } from "react";
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

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function Example() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/register_add_dataforfoods/')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  // Prepare data for the charts
  const districts = [...new Set(data.map(item => item.district))];
  const foodTypes = [...new Set(data.flatMap(item => item.items.map(food => food.type)))];

  const chartData = districts.map(district => {
    const districtData = data.find(item => item.district === district);
    const foodData = {};
    districtData.items.forEach(food => {
      foodData[food.type] = Number(food.quantity);
    });
    return { name: district, ...foodData };
  });

  const [selectedFood, setSelectedFood] = useState("rice");
  const foodData = chartData.map(({ name, ...rest }) => ({ name, value: rest[selectedFood] }));

  return (
    <div className='graph'>
      <div>
        <h4>
          <b>Pie Chart of Food Production</b>
        </h4>
        <select value={selectedFood} onChange={(e) => setSelectedFood(e.target.value)}>
          {foodTypes.map(type => <option key={type} value={type}>{type}</option>)}
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
        <h4>
          <b>Bar Chart of Foods</b>
        </h4>
        <BarChart
          width={500}
          height={300}
          data={chartData}
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
          {foodTypes.map((type, index) => (
            <Bar key={type} dataKey={type} fill={COLORS[index % COLORS.length]} />
          ))}
        </BarChart>
      </div>
    </div>
  );
}
