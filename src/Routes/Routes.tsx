import {Route, Routes } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { About } from '../Pages/About';

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
    )
}

export default Router;