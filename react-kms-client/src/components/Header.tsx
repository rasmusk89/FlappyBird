import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Header = () => {

    const appState = useContext(AppContext);

    return (
        <header>

            <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">Home</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                        <ul className="navbar-nav flex-grow-1">

                            <li>
                                <NavLink className="nav-link text-dark" to="/MealTypes">Meal Types</NavLink>
                            </li>

                            <li>
                                <NavLink className="nav-link text-dark" to="/form">FormDemo</NavLink>
                            </li>

                            {/*
                            <div className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/">Controllers</a>
                                <ul className="dropdown-menu" role="menu" aria-labelledby="dLabel">
                                    <li>
                                        <a className="nav-link text-dark" href="/Attendances">Attendances</a>
                                    </li>
                                    <li>
                                        <a className="nav-link text-dark" href="/AttendanceTypes">Attendance Types</a>
                                    </li>
                                    <li>
                                        <a className="nav-link text-dark" href="/Children">Children</a>
                                    </li>
                                    <li>
                                        <a className="nav-link text-dark" href="/Groups">Groups</a>
                                    </li>
                                    <li>
                                        <a className="nav-link text-dark" href="/Invoices">Invoices</a>
                                    </li>
                                    <li>
                                        <a className="nav-link text-dark" href="/Meals">Meals</a>
                                    </li>
                                    <li>
                                        <NavLink className="nav-link text-dark" to="/MealTypes">Meal Types</NavLink>
                                    </li>
                                    <li>
                                        <a className="nav-link text-dark" href="/Messages">Messages</a>
                                    </li>
                                    <li>
                                        <a className="nav-link text-dark" href="/Parents">Parents</a>
                                    </li>
                                    <li>
                                        <a className="nav-link text-dark" href="/Teachers">Teachers</a>
                                    </li>
                                </ul>
                            </div>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-dark" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Languages</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="nav-link text-dark" href="/Home/SetLanguage?culture=et&amp;returnUrl=%2F">eesti</a>
                                    <a className="nav-link text-dark" href="/Home/SetLanguage?culture=en-GB&amp;returnUrl=%2F">English (United Kingdom)</a>
                                </div>
                            </li>
                            */}
                        </ul>
                        <ul className="navbar-nav">
                            {/*
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="/Identity/Account/Register">Register</a>
                            </li>
                            */}
                            <li className="nav-item">
                                <NavLink className="nav-link text-dark" to="/identity/login">Log in {appState.firstName}</NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;