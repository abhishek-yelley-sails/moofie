import { UserContext } from "../components/UserContextProvider";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function Authenticate() {
    const ctxValue = useContext(UserContext);
    // auth disabled
    if (true || ctxValue.isLoggedIn) {
        return (
            <Outlet />
        );
    }
    return (
        <Navigate to={"/login"} />
    );
}