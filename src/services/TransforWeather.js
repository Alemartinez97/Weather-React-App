import convert from "convert-units";
import { SUN } from "./../constants/Weather";

const getTemp = kelvin => {
  //convertidor de unidades
  return convert(kelvin)
    .from("K")
    .to("C");
};
const getWeatherState = weather => {
  return SUN;
};
const transformWeather = weather_data => {
  const { humidity, temp } = weather_data.main;
  const { speed } = weather_data.wind;
  const weatherState = getWeatherState();
  const temperature = getTemp(temp);
  //arquitectura de datos, independencia de la api
  const data = {
    humidity,
    temperature,
    weatherState,
    wind: `${speed} m/s`
  };
  return data;
};
export default transformWeather;
