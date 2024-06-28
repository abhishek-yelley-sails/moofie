import SearchField from "../components/SearchField.jsx";
import { Outlet } from "react-router-dom";

export default function Home() {
    return (
        <div className="Home">
            <SearchField />
            <Outlet />
        </div>
    );
}