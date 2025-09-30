import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <nav className="navbar">
            <NavLink to="/redux" activeClassName="active">
                Redux
            </NavLink>
            <NavLink to="/" activeClassName="active">
                Home
            </NavLink>
            <NavLink to="/css" activeClassName="active">
                CSS
            </NavLink>
            <NavLink to="/state" activeClassName="active">
                State
            </NavLink>
            <NavLink to="/reducers" activeClassName="active">
                Reducer
            </NavLink>
        </nav>
    );
}

export default NavBar;
