import React from "react";
import "./humidity.scss";
import { ScaleLoader } from "react-spinners";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";

const Humidity = ({data,isloading}) => {

  if (isloading) return (
    <ScaleLoader color="#8884d8" height={30} width={4}/>
  )
  else
  return (
    <ResponsiveContainer>
      <LineChart data={data}>
        <CartesianGrid vertical={false} opacity={0.4} />
        <XAxis
          dataKey='created_at'
          fontSize='10px'
          axisLine={false}
          tickLine={false}
          tickFormatter={(str) => new Date(str).toLocaleDateString()}
          interval='preserveStartEnd'
        >
         <Label value='Date(dd/mm/yyyy)' position='centerBottom' dy={12} fontSize={14} />
        </XAxis>
        <YAxis
          fontSize='10px'
          dataKey='field2'
          axisLine={false}
          tickLine={false}
          tickCount={8}
          tickFormatter={(number) => `${number}%`}
          interval='preserveStartEnd'
        >
          <Label value="Humidity(%)" position='leftCenter' dx={-15} angle={-90} fontSize={14} />
        </YAxis>
        <Tooltip content={<CustomToolTip />} wrapperStyle={{outline:"none"}} />
        <Line
          type='monotone'
          dataKey='field2'
          stroke='#8884d8'
          activeDot={{ r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

const CustomToolTip = ({ active, label, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className='tooltip'>
        <h4>{new Date(label).toDateString()}</h4>
        <h6>{new Date(label).toTimeString().substring(0, 9)}</h6>
        <span>{payload[0].value}%</span>
      </div>
    );
  }
};
export default Humidity;
