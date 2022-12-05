import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../asset/hero-img.jpg'

const HeroComponent = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={heroImg} className="w-1/2 rounded-lg shadow-2xl" alt='hero section img' />
                <div>
                    <h1 className="text-5xl font-bold">Time To write Your Very First Code!!!</h1>
                    <p className="py-6">Start, switch, or advance your career with more than 200 courses, Professional Certificates, and degrees from world-class universities and companies</p>
                    <Link to='/courses'><button className="btn btn-primary rounded-lg">Get Started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HeroComponent;