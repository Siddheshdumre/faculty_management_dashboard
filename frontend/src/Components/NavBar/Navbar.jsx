import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const location = useLocation(); // Get the current location

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        });

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', () => {});
        };
    }, []);

    const isRegisterFacultyPage = location.pathname === '/register-faculty';

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''} ${isRegisterFacultyPage ? 'register-faculty-nav' : ''}`}>
            <img src={logo} alt="Logo" className="logo" />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/register-faculty">Register Faculty</Link></li>
                <li><Link to="/activity-form">Activity Form</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><button className='btn'>Contact Us</button></li>
            </ul>
        </nav>
    );
};

export default Navbar;
