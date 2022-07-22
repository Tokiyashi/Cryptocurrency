import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";


const Chart = ({inputData, width, height}) => {

    return (
                <LineChart
                    data={inputData}
                    width={width}
                    height={height}
                    margin={{
                        top: 0,
                        right: 50,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="10 10" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                </LineChart>
    );
}

export default Chart
