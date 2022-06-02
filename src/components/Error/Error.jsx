import React from 'react';
import PropTypes from 'prop-types';

import styles from './Error.module.css';
import '../../App.css';

const Error = ({ message, fix, t }) => (
    <div className={`${styles.error} ${fix} alert position-absolute`} role="alert">
        {t(message)}
    </div>
);

Error.propTypes = {
    message: PropTypes.string,
};

Error.defaultProps = {
    message: 'An error occurred',
};

export default Error;
