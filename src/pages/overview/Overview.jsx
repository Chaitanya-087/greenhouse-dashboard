import "./overview.scss";
import { Humidity, Temperature } from "../../components";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import AirIcon from '@mui/icons-material/Air';
import OpacityIcon from '@mui/icons-material/Opacity';
import WaterIcon from '@mui/icons-material/Water';
import useThingSpeak from "../../utils/hooks/ThingSpeak";

const Overview = () => {
 const {tempStat,humidStat,currTemp,currHumid,pumpStatus,waterLevel,isloading} = useThingSpeak();

  return (
    <div className='overview'>
      <div className='widgets'>
        <div className='widget'>
          <span className='title'>Temperature</span>
          <span className='value'>{currTemp}°C</span>
          <ThermostatIcon className='icon therm' />
        </div>
        <div className='widget'>
          <span className='title'>Humidity</span>
          <span className='value'>{currHumid}%</span>
          <AirIcon className='icon air' />
        </div>
        <div className='widget'>
          <span className='title'>Pump Status</span>
          <span className='value' data-stat={pumpStatus}>{pumpStatus == '0'?'OFF':'ON'}</span>
          <OpacityIcon className='icon status' />
        </div>
        <div className='widget'>
          <span className='title'>Water Level</span>
          <span className='value'>{waterLevel}%</span>
          <WaterIcon className='icon level' />
        </div>
      </div>
      <div className='statistics'>
        <div className='chart'>
          <Temperature data={tempStat} isloading={isloading} />
        </div>
        <div className="chart">
          <Humidity data={humidStat} isloading={isloading} />
        </div>
      </div>
    </div>
  );
};

export default Overview;
