import { useState, useEffect, useRef } from "react";
import axios from "axios";

const API_KEY = "V8QH5K9A6UZY5PT3";
const URL = "https://api.thingspeak.com/channels/2020091/feeds.json";

function useThingSpeak() {
  const [tempStat, setTempStat] = useState([]);
  const [humidStat, setHumidStat] = useState([]);
  const [currTemp,setCurrTemp] = useState(27);
  const [currHumid,setCurrHumid] = useState(50);
  const [pumpStatus,setPumpStatus] = useState(0);
  const [waterLevel,setWaterLevel] = useState(10)
  const [isloading, setLoading] = useState(false);


  const once = useRef(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(URL, {
        params: {
          api_key: API_KEY,
        },
      });
      const tempData = response.data.feeds.filter(d=>d['field1'] != null).slice(-10)
      const humidData = response.data.feeds.filter(d=>d['field2'] != null).slice(-10)
      setCurrTemp(tempData.slice(-1)[0].field1)
      setCurrHumid(humidData.slice(-1)[0].field2)
      setPumpStatus(response.data.feeds.filter(d=>d['field3']!=null).slice(-1)[0].field3)
      setWaterLevel(response.data.feeds.filter(d=>d['field4']!=null).slice(-1)[0].field4)
      setTempStat(tempData)
      setHumidStat(humidData)

    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (once.current) {
      fetchData();

      return () => {
        once.current = false;
      };
    }
  }, []);
  return {tempStat,humidStat,currTemp,currHumid,pumpStatus,waterLevel,isloading}
}

export default useThingSpeak;
