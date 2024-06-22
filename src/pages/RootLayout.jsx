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
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                }}>
                    <Outlet />
                </div>
            </div>
        </>
    );
}