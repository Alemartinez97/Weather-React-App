import React from "react";
import WeatherIcons from "react-weathericons";
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY } from "../../constants/Weather";
import PropType from "prop-types";
import './styles.css';
const stateToIconName = weatherState => {
  switch (weatherState) {
    case CLOUD:
      return "cloud";
    case CLOUDY:
      return "cloudy";
    case SUN:
      return "day-sunny";
    case RAIN:
      return "rain";
    case SNOW:
      return "snow";
    case WINDY:
      return "snow";
    default:
      return "day-sunny";
  }
};
const getWeatherIcon = weatherState => {
  return <WeatherIcons className='wicon'name={stateToIconName(weatherState)} size="4x" />;
};
const WeatherTemperature = ({ temperature, weatherState }) => (
  <div className='weatherTemperature'>
    {getWeatherIcon(weatherState)}
    <span className='temperature'>  {`${temperature}`}</span>
    <span className='temperatureType'> cº</span>
  </div>
);
WeatherTemperature.propTypes = {
  //este metdo me indica que si ingresa un valor en el componente debe ser numerico y literal
  temperature: PropType.number.isRequired,
  weatherState: PropType.string
};
export default WeatherTemperature;
