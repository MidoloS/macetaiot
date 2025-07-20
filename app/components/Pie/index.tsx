"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface PieMeasurementProps {
  value: number;
  maxValue: number;
  icon: React.ReactNode;
  color: string;
  label: string;
  unit: string;
}

const PieMeasurement: React.FC<PieMeasurementProps> = ({
  value,
  maxValue,
  icon,
  color,
  label,
  unit,
}) => {
  const data = [
    { name: "value", value: value },
    { name: "remaining", value: maxValue - value },
  ];

  const COLORS = [color, "#e5e7eb"]; // active color, inactive color (gray-200)

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-32 h-32">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={35}
              outerRadius={40}
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
              stroke="none"
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
        <div className="absolute inset-0 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="mt-2 text-center relative ">
        <p className="text-gray-500">{label}</p>
        <p className="text-2xl font-bold">
          {value}
          <span className="text-lg font-normal absolute text-zinc-400">
            {unit}
          </span>
        </p>
      </div>
    </div>
  );
};

export default PieMeasurement;
