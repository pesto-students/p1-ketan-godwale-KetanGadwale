import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Navigation from './routes/Navigation';
import Feature from './routes/Feature';
import Pricing from './routes/Pricing';
import Resource1 from './routes/Resource1';
import Resource2 from './routes/Resource2';
import Resource3 from './routes/Resource3';
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import './App.css';

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Navigation />}>
                    <Route index element={<Home />} />
                    <Route path='feature' element={<Feature />} />
                    <Route path='pricing' element={<Pricing />} />
                    <Route path='resource1' element={<Resource1 />} />
                    <Route path='resource2' element={<Resource2 />} />
                    <Route path='resource3' element={<Resource3 />} />
                    <Route path='login' element={<Login />} />
                    <Route path='signup' element={<SignUp />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
