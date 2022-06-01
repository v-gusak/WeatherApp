import Page from './components/Page';
import useTheme from './hooks/useTheme'
import './App.css'

function App() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`App ${theme}`}>
            <Page theme={theme} toggleTheme={toggleTheme} />
        </div>
        
    );
}

export default App;
