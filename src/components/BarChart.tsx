"use client";
import {
  BarChart as BarGraph,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
} from "recharts";

import { getChartsData } from "@/base/functions";

const data = getChartsData();

export default function BarChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarGraph data={data}>
        <XAxis
          dataKey="name"
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip  />
        <Bar dataKey="total" radius={[4, 4, 0, 0]} fill="#6b7280" />
      </BarGraph>
    </ResponsiveContainer>
  );
}
