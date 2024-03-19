"use client";
import React from "react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const ChartBox: React.FC<{ chartData: object[] }> = ({ chartData }) => {

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={500}
                height={200}
                data={chartData}

            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis dataKey="value" />
                <Tooltip />
                <Line connectNulls type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default ChartBox;