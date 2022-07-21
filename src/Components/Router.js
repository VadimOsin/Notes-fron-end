import React, {useState} from 'react';
import {
    Routes,
    Route
} from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";
import Error404 from "./Error404";
import Home from "./Home";
import {userContext} from "../context/userContext";

const Router = () => {

    const [user, setUser] = useState({
        id: '',
        userName: '',
        password: '',
        role: '',
        isAuth: false
    })
    return (<userContext.Provider value={{user, setUser}}>
        <Routes>
            {
                !user.isAuth && <>
                <Route path="/" element={<Login/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/*" element={<Error404/>}/>
                </>
                }
                {user.isAuth && <>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                </>}
                </Routes>
                </userContext.Provider>
                );
            };

            export default Router;