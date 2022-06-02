import Page from './components/Page';
import useTheme from './hooks/useTheme'
import './App.css'
import { useTranslation } from "react-i18next";
import './i18n';

function App() {
    const { theme, toggleTheme } = useTheme();
    
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    return (
        <div className={`App ${theme}`}>
            <Page theme={theme} toggleTheme={toggleTheme} t={t} changeLanguage={changeLanguage} />
        </div>
    
        
    );
}

export default App;
