import React from 'react';
import Navbar from "./Navbar";
import Notes from "./Notes";
import './CSS/Home.css'

const Home = () => {
    return (
        <div className="home">
            <Navbar/>
            <Notes/>

        </div>
    );
};

export default Home;