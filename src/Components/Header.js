import React from "react";

export default function Header(){
    return(
        <nav className="navbar">
            <div className="header--left">
                <div className="logo">
                    <img className="imgg" src="../logo.png"></img>
                </div>
                <div className="mr navb">Courses</div>
                <div className="navb">Programs</div>
            </div>
            <div className="header--right">
                <div></div>
                <div className="mr navb login">Log in</div>
                <div>
                    <button className="join">JOIN NOW</button>
                </div>
            </div>
        </nav>
    )
}