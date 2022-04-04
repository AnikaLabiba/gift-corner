import React from 'react';
import { Pie, PieChart } from 'recharts';
import useData from '../../Hooks/useData';

const TwoLevelPieChart = () => {
    const [data, setData] = useData()
    return (
        <PieChart width={300} height={300}>
            <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
            <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart>
    );
};

export default TwoLevelPieChart;