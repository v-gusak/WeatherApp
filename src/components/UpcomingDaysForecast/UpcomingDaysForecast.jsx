import React from 'react';
import PropTypes from 'prop-types';

import UpcomingDaysForecastItem from '../UpcomingDaysForecastItem';

// import styles from './UpcomingDaysForecast.module.css';
import '../../App.css';

const UpcomingDaysForecast = ({ days, theme, t }) => (
    <ul className={`weekList-${theme} d-flex justify-content-between p-0`}>
        {days.map(day => (
            <UpcomingDaysForecastItem {...day} key={day.weekday} t={t} />
        ))}
    </ul>
);

UpcomingDaysForecast.propTypes = {
    days: PropTypes.array.isRequired,
};

export default UpcomingDaysForecast;
