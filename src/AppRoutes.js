import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Parent from './components/Parent';

const AppRoutes = () => {

    return (
        <div>
            <p>Delete AppRoutes Component</p>
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element="Home" > <Home /> </Route>
                    <Route path="/login" > <Login /> </Route>
                    <Route path="/parent" > <Parent /> </Route>

                </Routes>
            </BrowserRouter>

        </div>
    );
};

export default AppRoutes;

