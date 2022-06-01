import React, { Fragment } from 'react';

import Header from '../Header';
import Form from '../Form';
import FormSecond from '../FormSecond';
import Error from '../Error';
import Loader from '../Loader';
import Forecast from '../Forecast';

import useForecast from '../../hooks/useForecast';

// import styles from './Page.module.css';
import '../../App.css';


const Page = ({theme, toggleTheme}) => {
    const { isError, isLoading, forecast, submitRequest } = useForecast();
    // const { theme, toggleTheme } = useTheme();

    const onSubmit = (value) => {
        submitRequest(value);
    };

    // const variable = "d";

    return (
        <Fragment>
            <Header />
            {/* {variable === "ua" && (
                <Forecast forecast={forecast} />
            )} */}
            {forecast && (
                <div className={`boxSecond-${theme}`}>
                    {!isLoading && <FormSecond submitSearch={onSubmit} theme={theme} toggleTheme={toggleTheme} />}
                    {isError && <Error message={isError} />}
                </div>
            )}
            {!forecast && (
                <div className={`boX-${theme} position-relative`}>
                    {!isLoading && <Form submitSearch={onSubmit} />}
                    {isError && <Error message={isError} />}
                    {isLoading && <Loader />}
                </div>
            )}
            {forecast && <Forecast forecast={forecast} theme={theme} />}
            {!forecast && (
                <div className='text-center mt-5'>
                    <button type="button" onClick={toggleTheme} className={`button-${theme}`}>
                        THEME
                    </button>
                </div>
            )}
        </Fragment>
    );
};

export default Page;
