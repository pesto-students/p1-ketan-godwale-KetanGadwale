import { Routes, Route } from 'react-router-dom';
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
                    {/* <Route path='feature' element={<Feature />} />
                    <Route path='pricing' element={<Pricing />} />
                    <Route path='resource1' element={<Resource1 />} />
                    <Route path='resource2' element={<Resource2 />} />
                    <Route path='resource3' element={<Resource3 />} /> */}
                </Route>
            </Routes>
        </div>
    );
}

export default App;
