import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation.jsx';

export default function RootLayout() {
    return (
        <>
            <MainNavigation />
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "50px"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    padding: "50px",
                }}>
                    <Outlet />
                </div>
            </div>
        </>
    );
}