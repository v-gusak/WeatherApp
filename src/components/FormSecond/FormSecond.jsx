import React, {useState} from 'react';
import PropTypes from 'prop-types';

import styles from './FormSecond.module.css';
import '../../App.css';

const Form = ({submitSearch, theme, toggleTheme}) => {
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
                placeholder="Search for location"
                required
                value={location}
                onChange={e => setLocation(e.target.value)}
            />

            <button type="submit" className={styles.button} onClick={onSubmit}>
                SEARCH
            </button>

            <div className='btn-theme'>
                <button type="button" onClick={toggleTheme} className={`button-${theme}`}>
                     THEME
                </button>
            </div>
        </form>
    );
};

Form.propTypes = {
    submitSearch: PropTypes.func.isRequired,
}

export default Form;
