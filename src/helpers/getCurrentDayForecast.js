import moment from 'moment';

const getCurrentDayForecast = (data, city, country) => ({
    weekday: moment(data.datetime).format('dddd'),
    date: moment(data.datetime).format('MMMM D'),
    location: city + ", " + country,
    temperature: Math.round(data.temp),
    feelsLike: Math.round(data.app_max_temp),
    weatherIcon: `https://www.weatherbit.io/static/img/icons/${data.weather.icon}.png`,
    weatherDescription: data.weather.description,
});

export default getCurrentDayForecast;
