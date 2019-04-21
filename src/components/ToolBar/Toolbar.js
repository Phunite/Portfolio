import React from 'react';
import "./Toolbar.css"
const toolbar= props =>(
    <div>
    <header className="toolbar"> 
        <nav className="toolbar_nav">
        <div></div>
            <div className="toolbar_logo"><a href="/"><img src="public\mylogo.jpg"></img></a></div>
            <div className="nav_item">
                <ul>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Users</a></li>
                </ul>
            </div>
        </nav>
    </header>
    </div>
);

export default toolbar;