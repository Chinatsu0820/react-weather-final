import React from "react";
import '../components/Header.css'
import snow_icon from "../imgs/icon.png";

export default function Header() {

    return (
        <header>
            <nav>
        
        
                <ul>
                    <li>    <img src={snow_icon} alt="snow_icon " className="w-20 h-20" /></li>
                    <li className='list'>
                        Weather application
                    </li>
                </ul>
            </nav>
        </header>
    )
}