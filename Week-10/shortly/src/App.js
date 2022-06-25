import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './routes/Home';
import Navigation from './routes/Navigation';
import './App.css';
import Form from './components/Form';

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Navigation />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
            <h1>Shortly</h1>
            <Form />
        </div>
    );
}

export default App;
