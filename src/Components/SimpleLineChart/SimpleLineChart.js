import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useData from '../../Hooks/useData';

const SimpleLineChart = () => {
    const [data, setData] = useData()
    return (

        <LineChart width={380} height={270} data={data}>
            <Line dataKey={'sell'}></Line>
            <XAxis dataKey='month'></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
        </LineChart>

    );
};

export default SimpleLineChart;