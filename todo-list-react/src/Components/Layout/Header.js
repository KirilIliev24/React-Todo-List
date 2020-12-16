import React from 'react';
import '../../Css/Header.css';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <h1>Todo list app</h1>
            <Link to = "/" className = "linkText">Home</Link> |  <Link to = "/about" className = "linkText">About</Link>
        </header>
    )
}
