"use client";

import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

interface MeasureHistoryProps {
  title: string;
  data: {
    value: number;
    createdAt: string;
  }[];
  color: string;
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const formattedDate = new Intl.DateTimeFormat("es-ES", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(data.createdAt));

    return (
      <div className="bg-gray-800 text-white p-2 rounded-lg shadow-lg border border-gray-700">
        <p className="font-bold text-center">{`${data.value}`}</p>
        <p className="text-sm text-gray-400">{formattedDate}</p>
      </div>
    );
  }

  return null;
};

const MeasureHistory: React.FC<MeasureHistoryProps> = ({
  title,
  data,
  color,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full">
      <h3 className="text-lg font-semibold text-gray-600 text-center mb-4">
        {title}
      </h3>
      <div style={{ width: "100%", height: 200 }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.4} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="day" axisLine={false} tickLine={false} />
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={true}
              horizontal={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MeasureHistory;
