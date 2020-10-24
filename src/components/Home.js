
import React from 'react';
import './Home.css';
import TopNavbar from './Navbar';
import Row1 from './Row1';
import Row2 from './Row2';
import Row3 from './Row3';
import Row4 from './Row4';
import HowitWorks from './HowitWorks';
import Subscribe from './Subscribe';
import Footer from './Footer';

const Home = () => {
    return (
        <>
            <div className="maindiv">
                <TopNavbar />
                <div className="background-img">
                <Row1/>
                </div>
                <Row2/>
                <Row3 />
                <Row4 />
                <HowitWorks />
                <Subscribe />
                <Footer />
            </div> 
        </>
    )
}

export default Home;