import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';

import CurrentDay from '../CurrentDay';
import CurrentDayDescription from '../CurrentDayDescription';
import UpcomingDaysForecast from '../UpcomingDaysForecast';

// import styles from './Forecast.module.css';
import '../../App.css';

const Forecast = ({ forecast, theme, t }) => (
    <Container className={`box-${theme}`}>
        <Row>
            <Col xs={12} md={4}>
                <div className={`card-${theme}`}>
                    <CurrentDay {...forecast.currentDay} t={t} />
                </div>
            </Col>
            <Col xs={12} md={8} className="d-flex flex-column justify-content-between">
                <CurrentDayDescription forecast={forecast.currentDayDetails} t={t} />
                <UpcomingDaysForecast days={forecast.upcomingDays} theme={theme} t={t} />
            </Col>
        </Row>
    </Container>
);

Forecast.propTypes = {
    forecast: PropTypes.shape({
        currentDay: PropTypes.object, 
        currentDayDetails: PropTypes.array, 
        upcomingDays: PropTypes.array
    }),
};

export default Forecast;
