import moment from 'moment';

const getWeekday = date => moment(date).format('dddd').substring(0, 3);

const getUpcomingDaysForecast = (data) =>
    data.slice(1).map(item => ({
        imgUrl:  `https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`,
        temperature: Math.round(item.max_temp),
        weekday: getWeekday(item.datetime),
    }));

export default getUpcomingDaysForecast;
