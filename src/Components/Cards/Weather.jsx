import React, { useEffect, useState } from "react";
import clear_icon from "../Asset/WeatherIcon/clear.png";
import cloud_icon from "../Asset/WeatherIcon/cloud.png";
import drizzle_icon from "../Asset/WeatherIcon/drizzle.png";
import humidity_icon from "../Asset/WeatherIcon/humidity.png";
import rain_icon from "../Asset/WeatherIcon/rain.png";
import snow_icon from "../Asset/WeatherIcon/snow.png";
import wind_icon from "../Asset/WeatherIcon/wind.png";
import styled from "styled-components";

const WeatherContainer = styled.div`
  margin: 20px;
  width: 175px;
  height: auto;
  padding: 15px;
  border-radius: 10px;
  background-color: #046cb8;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const SearchBar = styled.form`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const SearchInput = styled.input`
  width: 80%;
  padding: 10px;
  height: 20px;
  border: none;
  outline: none;
  border-radius: 40px;
  color: #626262;
  background: #ebfffc;
  font-size: 10px;
`;

const SearchButton = styled.button`
  width: 20%;
  height: 20px;
  padding: 6px 9px;
  border-radius: 40px;
  background: #ebfffc;
  font-size: 10px;
  cursor: pointer;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WeatherIcon = styled.img`
  width: 100%;
  margin: 20px 0;
`;

const Temperature = styled.p`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  line-height: 1;
`;

const Location = styled.p`
  color: #fff;
  font-size: 10px;
  line-height: 1;
`;

const WeatherData = styled.div`
  width: 100%;
  margin-top: 10px;
  color: #fff;
  display: flex;
  justify-content: space-between;
`;

const DataCol = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 5px;
  font-size: 11px;
`;

const DataIcon = styled.img`
  width: 15px;
  margin-top: 10px;
`;

const DataText = styled.p`
  margin: 0;
`;

const DataSpan = styled.span`
  display: block;
  font-size: 8px;
`;

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Hue");
  const [searchTerm, setSearchTerm] = useState("");

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  const searchWeather = async (city) => {
    try {
      const apiKey = "bdefef881c1254647fdb351effe30720";
      const Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
      const response = await fetch(Url);
      const data = await response.json();

      const icon = allIcons[data.weather[0].icon] || clear_icon;
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    searchWeather(searchTerm);
    setCity(searchTerm);
    setSearchTerm(""); // Clear the search input after submission
  };

  useEffect(() => {
    searchWeather(city);
  }, [city]);

  return (
    <WeatherContainer>
      <SearchBar onSubmit={handleSearch}>
        <SearchInput
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchButton type="submit">
          <i className="fas fa-search"></i>
        </SearchButton>
      </SearchBar>

      {weatherData && (
        <>
          <WeatherIcon src={weatherData.icon} alt="Weather icon" />
          <Temperature>{weatherData.temperature}°C</Temperature>
          <Location>{weatherData.location}</Location>

          <WeatherData>
            <DataCol>
              <DataIcon src={humidity_icon} alt="Humidity icon" />
              <div>
                <DataText>{weatherData.humidity} %</DataText>
                <DataSpan>Humidity</DataSpan>
              </div>
            </DataCol>

            <DataCol>
              <DataIcon src={wind_icon} alt="Wind speed icon" />
              <div>
                <DataText>{weatherData.windSpeed} Km/h</DataText>
                <DataSpan>Wind Speed</DataSpan>
              </div>
            </DataCol>
          </WeatherData>
        </>
      )}
    </WeatherContainer>
  );
}

export default Weather;
