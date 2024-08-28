"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface WeatherData {
  temperature: number;
  weathercode: number;
}

export default function Page() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    axios
      .get('https://api.open-meteo.com/v1/forecast', {
        params: {
          latitude: 35.6895,
          longitude: 139.6917,
          current_weather: true,
        },
      })
      .then((res) => {
        setWeatherData(res.data.current_weather);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Thông tin thời tiết:</h1>
      <p>Nhiệt độ: {weatherData.temperature}°C</p>
      <p>Tình trạng thời tiết: {weatherData.weathercode}</p>
    </div>
  );
}
