import React from 'react';
import PropTypes from 'prop-types';

const CurrentDayDescriptionItem = ({ name, value, unit, t }) => (
    <div className="d-flex justify-content-between">
        <p className="mb-0 font-weight-bolder text-uppercase">{t(name)}</p>
        <p className="mb-0">
            {t(value)} {t(unit)}
        </p>
    </div>
);

CurrentDayDescriptionItem.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
};

export default CurrentDayDescriptionItem;
