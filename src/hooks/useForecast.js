import { useState } from "react";
import axios from 'axios';

import getCurrentDayForecast from '../helpers/getCurrentDayForecast';
import getCurrentDayDetailedForecast from '../helpers/getCurrentDayDetailedForecast';
import getUpcomingDaysForecast from '../helpers/getUpcomingDaysForecast';

const GET_WEATHER = 'https://api.weatherbit.io/v2.0/forecast/daily?key=1181fb6387ed4793931fc6e78a341948&days=5';

const useForecast = () => {
    const [isError, setError] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [forecast, setForecast] = useState(null)

    const getForecastData = async (location) => {
        // const response = await fetch(`${GET_WEATHER}&city=${location}`);
        // const data = response.data;
            
        // if (!response.ok) {
        //     setLoading(false);
        //     setError('There is no such location');
        //     return;
         // }

        const response = await axios.get(`${GET_WEATHER}&city=${location}`);
        const data = response.data;

         if (response.status !== 200) {
            setLoading(false);
            setError('There is no such location');
            return;
        }

        console.log({data});

        return data;
    };

    const gatherForecastData = (data) => {
        const currentDay = getCurrentDayForecast(data.data[0], data.city_name, data.country_code);
        const currentDayDetails = getCurrentDayDetailedForecast(data.data[0]);
        const upcomingDays = getUpcomingDaysForecast(data.data);

        setForecast({ currentDay, currentDayDetails, upcomingDays });
        setLoading(false);
    }

    const submitRequest = async (location) => {
        setLoading(true);
        setError(false);

        const data = await getForecastData(location);

        if(!data) return;

        gatherForecastData(data);
    };

    return {
        isError,
        isLoading,
        forecast,
        submitRequest,
    }
}

export default useForecast;