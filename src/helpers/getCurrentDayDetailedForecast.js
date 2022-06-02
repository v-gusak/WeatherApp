const currentDayForecast = data => [
    {
        name: 'air pressure',
        value: Math.round(data.pres),
        unit: 'mb',
    },
    {
        name: 'humidity',
        value: data.rh,
        unit: '%',
    },
    {
        name: 'wind speed',
        value: Math.round(data.wind_spd),
        unit: 'm/s',
    },
    {
        name: 'wind direction',
        value: data.wind_cdir,
        unit: '',
    },
    {
        name: 'max temp',
        value: Math.round(data.max_temp),
        unit: '°C',
    },
    {
        name: 'min temp',
        value: Math.round(data.min_temp),
        unit: '°C',
    },
    {
        name: 'uv index',
        value: Math.round(data.uv),
        unit: '',
    },
];

export default currentDayForecast;
