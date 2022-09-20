import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmpData from './components/EmpData';
import Home from './components/Home';
import Login from './components/Login';
import Parent from './components/Parent';

const AppRoutes = () => {

    return (
        <div>
            <p>Delete AppRoutes Component</p>
            <BrowserRouter>
                <Routes>
                    <Route path="/emp" element={<EmpData />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/parent" element={<Parent />} />
                    <Route path="/" element={<Home />} />

                    {/* <Route path="/login" > <Login /> </Route> */}


                </Routes>
            </BrowserRouter>

        </div>
    );
};

export default AppRoutes;

