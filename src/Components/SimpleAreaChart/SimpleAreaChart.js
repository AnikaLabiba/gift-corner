import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import useData from '../../Hooks/useData';

const SimpleAreaChart = () => {
    const [data, setData] = useData()
    return (
        <AreaChart
            width={370}
            height={200}
            data={data}
            margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
    );
};

export default SimpleAreaChart;