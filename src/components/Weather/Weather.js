import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = (props) => {
    const [weatherData, setWeatherData] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  
    useEffect(() => {
        let isMounted = true; // keep track of whether component is mounted or not
        const fetchWeatherData = async () => {
            try {
                navigator.geolocation.getCurrentPosition (
                    async (position) => {
                        const { latitude, longitude } = position.coords;
                        const weatherApiKey = process.env.WEATHER_API_KEY;
                        const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherApiKey}&units=metric`;
                        const response = await axios.get(weatherApiUrl);
                        if (isMounted) {
                            setWeatherData(response.data); // only update state if component is still mounted
                        }
                    }
                )
            } catch (error) {
                console.error(error);
                if (isMounted) {
                    setWeatherData(null); // only update state if component is still mounted
                }
            }
        };
        fetchWeatherData();

        return () => {
            isMounted = false; // cancel task and clear subscriptions when component unmounts
        };
    }, []);

    const handleClick = () => {
        props.togglePopup();
    };

    if (!weatherData) {
        return <div>Loading...</div>;
    }

    return (          
        <div className="weather" onClick={handleClick} role="button">
        {weatherData ? (
            <div>
                <div>
                    <h2>Latest Weather Updates</h2>
                </div>
                <div>
                    <h3>Current Location: {weatherData.name}</h3>
                    <p>Temperature: {Math.round(weatherData.main.temp)}&deg;C</p>
                    <p>Description: {weatherData.weather[0].description}</p>
                    <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                </div>
                <div>{weatherData.weather[0].main}</div>
            </div>
        ) : (
          <div>Loading...</div>
        )}
        {isPopupOpen && (
            <Popup content={weatherData} onClose={handlePopupClose} />
        )}
      </div>
    );
};

export default Weather;
