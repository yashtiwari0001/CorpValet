import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';
import gif from '/gif.gif'

const Home = () => {
    return (
        <div className="main">
            <div className="left">
                <div className="content">
                    <h1>Start your business in USA from anywhere in the world</h1>
                    <p className='op'>
                        From setting up your business to banking solutions to accounting and compliance reporting, 
                        CorpValet is your trusted one-stop partner for all your business needs in all 50 states.
                    </p>
                    <NavLink to="/businesstype" className="setup">Set Up Business In USA Now</NavLink>
               </div>
            </div>
            <div className="right">
                <img
                    className="usa"
                    src={gif}
                    alt="Animated GIF"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
            </div>
        </div>
    );
}

export default Home;
