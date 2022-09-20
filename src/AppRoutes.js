import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmpData from './components/EmpData';
import Header from "./components/Header";
import Home from './components/Home';
import Login from './components/Login';
import Parent from './components/Parent';

const AppRoutes = () => {

    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
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
        </div>
    );
};

export default AppRoutes;

