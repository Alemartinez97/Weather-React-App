import React, { Component } from "react";
import transformWeather from "./../../services/TransforWeather";
import Location from "./Location";
import WeatherData from "../WeatherData";
import "./styles.css";
import { SUN } from "../../constants/Weather";


const location = "mendoza,ar";
const api_key = "09de968996d2d3656727cc7ab05b7bdd";
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;

const data = {
  temperature: 20,
  weatherState: SUN,
  humidity: 10,
  wind: "10 m/s"
};

class WeatherLocation extends Component {
  constructor() {
    super();
    this.state = {
      //estoy utilizando el estado del componente
      city: "Mendoza",
      data: data
    };
  }

  handleUpdateClick = () => {
    fetch(api_weather)
      .then(data => {
        debugger;
        console.log(data); //una promise es la ejecucion de algo a futuro
        return data.json();
      })
      .then(weather_Data => {
        const data = transformWeather(weather_Data);
        this.setState({ data });
        console.log(weather_Data);
      });
  };
  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
      console.log("componentwillmount"); // component que se montara, se ejecuta entre el constructor y el render
  }
  componentDidMount() {
      console.log("componentdidmount"); //se ejecuta cuando el component entra en lo que es dom, el arbol de html
  }
  componentWillUpdate(){
      console.log("componentWillUpdate"); //se ejecuta cada ves que  actualiza 
  }
  componentDidUpdate(){
      console.log("componentDidUpdate"); //se ejecuta despues del renderizado
  }
  
  render = () => {
    //el class Component lleva el ciclo de vida de react
    const { city, data } = this.state;
    return (
      <div className="weatherLocation">
        <Location city={city} />
        <WeatherData data={data} />
        <button onClick={this.handleUpdateClick}>Actualizar</button>
      </div>
    );
  };
}
export default WeatherLocation;
