import React from 'react'
import { FaCopyright } from 'react-icons/fa';
import {RiNetflixFill} from 'react-icons/ri';

const Footer = () => {
    return (
        <div className='ful'>
            <div className="footer">
                <h1 className='footerheading'><RiNetflixFill/> Netflix</h1>
                <div className="footerbottom">
                    <h1>Legal Stuff</h1>
                    <h1>Privacy Policy</h1>
                    <h1>Security</h1>
                </div>
                <p className='copy'>copyright <FaCopyright /> 2022 All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer