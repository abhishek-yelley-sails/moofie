import { NavLink } from 'react-router-dom';

export default function MainNavigation() {
    const navlinkClass = ({ isActive, isPending }) => "nav " + (isPending ? "pending" : isActive ? "active" : "");
    return (
        <header>
            <nav>
                <ul className="nav">
                    <li>
                        <NavLink to="/" className={navlinkClass} end>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={navlinkClass} end>About</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}