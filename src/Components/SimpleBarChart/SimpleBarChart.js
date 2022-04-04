import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import useData from '../../Hooks/useData';

const SimpleBarChart = () => {
    const [data, setData] = useData()
    return (
        <BarChart
            width={350}
            height={250}
            data={data}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="investment" stackId="a" fill="#8884d8" />
            <Bar dataKey="month" stackId="a" fill="#82ca9d" />
        </BarChart>
    );
};

export default SimpleBarChart;