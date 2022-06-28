import { useState } from 'react';
function App() {
    const [light, setLight] = useState(true);

    const switchLight = () => {
        setLight(!light);
    };

    const lightedness = light ? 'lit' : 'dark';

    return (
        <div className={`App ${lightedness}`}>
            <h1>Light Switch : {lightedness}</h1>
            <button onClick={switchLight}>Switch</button>
        </div>
    );
}

export default App;
