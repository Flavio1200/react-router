import { Link, NavLink } from "react-router-dom";

export function Menu(){
    return(
        <nav>
            <ul>
                <li><NavLink style={({ isActive })=> ({color: isActive ? 'blue': 'red'})} to="/">Home</NavLink></li>
                <li><NavLink style={({ isActive })=> ({color: isActive ? 'blue': 'red'})} to="/blog">Blog</NavLink></li>
                <li><NavLink style={({ isActive })=> ({color: isActive ? 'blue': 'red'})} to="/login">Login</NavLink></li>
                <li><NavLink style={({ isActive })=> ({color: isActive ? 'blue': 'red'})} to="/Logout">Logout</NavLink></li>
                <li><NavLink style={({ isActive })=> ({color: isActive ? 'blue': 'red'})} to="/about">About</NavLink></li>
            </ul>
        </nav>
    )
}