import { useEffect } from "react";
import { ScaleLoader } from "react-spinners";
import {
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";
import useThingSpeak from "../../utils/hooks/ThingSpeak";
import "./temperature.scss";

const Temperature = ({data,isloading}) => {

  if (isloading) return <ScaleLoader color='#8884d8' height={30} width={4} />;
  else
    return (
      <ResponsiveContainer>
        <AreaChart data={data}>
          <defs>
            <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey='created_at'
            fontSize='10px'
            axisLine={false}
            tickLine={false}
            tickFormatter={(str) => new Date(str).toLocaleDateString()}
            interval='preserveStartEnd'>
            <Label
              value='Date(dd/mm/yyyy)'
              position='centerBottom'
              dy={12}
              fontSize={14}
            />
          </XAxis>
          <YAxis
            fontSize='10px'
            dataKey='field1'
            axisLine={false}
            tickLine={false}
            tickCount={8}
            tickFormatter={(number) => `${number}°C`}
            interval='preserveStartEnd'>
            <Label
              value='Temperature(°C)'
              position='leftCenter'
              dx={-15}
              angle={-90}
              fontSize={14}
            />
          </YAxis>
          <CartesianGrid vertical={false} opacity={0.4} />
          <Tooltip
            content={<CustomToolTip />}
            wrapperStyle={{ outline: "none" }}
          />
          <Area
            type='monotone'
            dataKey='field1'
            stroke='#8884d8'
            fillOpacity={1}
            fill='url(#colorUv)'
          />
        </AreaChart>
      </ResponsiveContainer>
    );
};

const CustomToolTip = ({ active, label, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className='tooltip'>
        <h4>{new Date(label).toDateString()}</h4>
        <h6>{new Date(label).toTimeString().substring(0, 9)}</h6>
        <span>{payload[0].value}°C</span>
      </div>
    );
  }
};
export default Temperature;
