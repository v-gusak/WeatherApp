import React, { Fragment } from 'react';

import Header from '../Header';
import Form from '../Form';
import FormSecond from '../FormSecond';
import Error from '../Error';
import Loader from '../Loader';
import Forecast from '../Forecast';

import useForecast from '../../hooks/useForecast';
import '../../App.css';


const Page = ({theme, toggleTheme, t, changeLanguage}) => {
    const { isError, isLoading, forecast, submitRequest } = useForecast();

    const onSubmit = (value) => {
        submitRequest(value);
    };

    return (
        <Fragment>
            <Header />
            {forecast && (
                <div className={`boxSecond-${theme}`}>
                    {!isLoading && <FormSecond submitSearch={onSubmit} theme={theme} toggleTheme={toggleTheme} t={t} changeLanguage={changeLanguage} />}
                    {isError && <Error message={isError} fix={'fix'} t={t} />}
                    {isLoading && <Loader />}
                </div>
            )}
            {!forecast && (
                <div className={`boX-${theme} position-relative`}>
                    {!isLoading && <Form submitSearch={onSubmit} t={t} />}
                    {isError && <Error message={isError} t={t} />}
                    {isLoading && <Loader />}
                </div>
            )}
            <div className='text-center langButtons'>
                <button type="button" onClick={toggleTheme} className={`button-${theme}`}>{t("THEME")}</button>
                <button className={`button-${theme}`} onClick={() => changeLanguage("ua")}>УКР</button>
                <button className={`button-${theme}`} onClick={() => changeLanguage("en")}>EN</button>
            </div>
            {forecast && <Forecast forecast={forecast} theme={theme} t={t} />}
        </Fragment>
    );
};

export default Page;
