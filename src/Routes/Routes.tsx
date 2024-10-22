import {Route, Routes } from 'react-router-dom';
import { Home } from '../Pages/Home';

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    )
}

export default Router;