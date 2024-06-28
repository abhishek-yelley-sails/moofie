import SearchField from "../components/SearchField.jsx";
import { Outlet, useLocation } from "react-router-dom";
import homeBG from "../assets/homeBG.webp";

export default function Home() {
    const location = useLocation();
    return (
        <div className="Home">
            <SearchField />
            {location.pathname === "/" ?
                <img
                    style={
                        {
                            width: "90vw",
                            height: "60vh",
                            objectFit: "cover",
                            borderRadius: "20px",
                            marginTop: "50px",
                            opacity: 0.5
                        }
                    }
                    src={homeBG} alt={"home image"}
                />
                :
                <Outlet />
            }
        </div>
    );
}