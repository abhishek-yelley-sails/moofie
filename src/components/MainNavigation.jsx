import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './UserContextProvider';

export default function MainNavigation() {
    const navlinkClass = (isActive, isPending) => (isPending ? "pending" : isActive ? "active" : "");
    const ctxValue = useContext(UserContext);
    return (
        <header>
            <nav>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0px" }}>
                    <ul className="nav-ul">
                        <li>
                            <NavLink to="/" className={({ isActive, isPending }) => ("nav-ul " + navlinkClass(isActive, isPending))} end>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({ isActive, isPending }) => ("nav-ul " + navlinkClass(isActive, isPending))} end>About</NavLink>
                        </li>
                    </ul>
                    {ctxValue.isLoggedIn &&
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <span style={{ fontWeight: 500 }}>Hello, {ctxValue.name}!</span>
                            <NavLink to="/user" className={({ isActive, isPending }) => ("nav-img " + navlinkClass(isActive, isPending))} end>
                                <img style={{ width: "50px", height: "50px", padding: "0px", margin: "0px", borderRadius: "50%" }} src={ctxValue.image} />
                            </NavLink>
                        </div>
                    }
                </div>
            </nav>

        </header>
    );
}