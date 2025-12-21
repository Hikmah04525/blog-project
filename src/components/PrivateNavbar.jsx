import {NavLink} from "react-router-dom";

const PrivateNavbar = () => {
    return (
        <nav className="navbar-container"> 
            <NavLink to="/">Home</NavLink>
            <NavLink to ="/categories">Categories</NavLink>
            <NavLink to ="/posts">Posts</NavLink>
            <NavLink to ="/profile">Profile</NavLink>
            <NavLink to ="/settings">Settings</NavLink>
            <NavLink to ="/login">Logout</NavLink>
        </nav>
    );
            
}

export default PrivateNavbar;