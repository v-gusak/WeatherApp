import React, {useState} from 'react';
import PropTypes from 'prop-types';

import styles from './FormSecond.module.css';
import '../../App.css';

const Form = ({submitSearch, theme, toggleTheme, t}) => {
    const [location, setLocation] = useState('');
    
    const onSubmit = (e) => {
        e.preventDefault();
        if (!location || location === '') return;
        submitSearch(location);
    };

    return (
        <form onSubmit={onSubmit} className={`d-flex`}> 
            <input
                aria-label="location"
                type="text"
                className={`${styles.input} form-control`}
                placeholder={t("Location")}
                required
                value={location}
                onChange={e => setLocation(e.target.value)}
            />

            <button type="submit" className={styles.button} onClick={onSubmit}>
                {t("SEARCH")}
            </button>
        </form>
    );
};

Form.propTypes = {
    submitSearch: PropTypes.func.isRequired
}

export default Form;
