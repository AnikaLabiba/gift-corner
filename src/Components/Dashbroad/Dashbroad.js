import React from 'react';
import SimpleAreaChart from '../SimpleAreaChart/SimpleAreaChart';
import SimpleBarChart from '../SimpleBarChart/SimpleBarChart';
import SimpleLineChart from '../SimpleLineChart/SimpleLineChart';
import TwoLevelPieChart from '../TwoLevelPieChart/TwoLevelPieChart';
import './Dashbroad.css'

const Dashbroad = () => {
    return (
        <div className='charts container mt-5'>
            <div className="line-chart w-50">
                <h4>Month wise sell</h4>
                <SimpleLineChart></SimpleLineChart>
            </div>
            <div className="pie-chart">
                <h4>Investment vs  Revenue</h4>
                <TwoLevelPieChart></TwoLevelPieChart>
            </div>
            <div className="area-chart">
                <h4>Investment vs  Revenue</h4>
                <SimpleAreaChart></SimpleAreaChart>
            </div>
            <div className="area-chart">
                <h4>Investment vs  Revenue</h4>
                <SimpleBarChart></SimpleBarChart>
            </div>
        </div>
    );
};

export default Dashbroad;