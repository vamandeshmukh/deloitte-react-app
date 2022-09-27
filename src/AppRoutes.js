import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogPost from "./components/BlogPost";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import EmpData from './components/EmpData';
// import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from './components/Home';
import Login from './components/Login';
import Logout from "./components/Logout";
import Parent from './components/Parent';
import Register from "./components/Register";


const AppRoutes = () => {

    console.log(window.sessionStorage.getItem(`loginStatus`));

    let currrentUser = window.sessionStorage.getItem(`loginStatus`);

    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                </div>
                <div>
                    {currrentUser &&
                        <div>
                            <Routes>
                                <Route path="/blog" element={<BlogPost />} />
                                <Route path="/comp1" element={<Comp1 />} />
                                <Route path="/comp2" element={<Comp2 />} />
                                <Route path="/emp" element={<EmpData />} />
                                <Route path="/home" element={<Home />} />
                                <Route path="/logout" element={<Logout />} />
                                <Route path="/parent" element={<Parent />} />
                                <Route path="/" element={<Home />} />
                                {/* <Route path="/login" > <Login /> </Route> */}
                            </Routes>
                        </div>
                    }
                    {(!currrentUser) &&
                        <div>
                            <Routes>
                                <Route path="/login" element={<Login />} />
                                <Route path="/register" element={<Register />} />
                                <Route exact path="/" element={<Home />} />
                                <Route path="/logout"  element={<Logout />} />
                                <Route path="*" element={<Home />} />
                                {/* <Route path="/login" > <Login /> </Route> */}
                            </Routes>
                        </div>
                    }
                </div>
            </BrowserRouter>
            <div>
                {/* <Footer /> */}
            </div>

        </div>
    );
};

export default AppRoutes;

