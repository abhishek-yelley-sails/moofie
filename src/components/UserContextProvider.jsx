import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const UserContext = createContext({
    theme: "",
    toggleTheme: () => { },
    name: "",
    changeName: () => { },
    isLoggedIn: false,
    toggleLogin: () => { },
    image: "",
    changeImage: () => { }
});

export default function UserContextProvider({ children }) {
    const [theme, setTheme] = useState("light");
    const [name, setName] = useState("test");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [image, setImage] = useState("/defaultProfileImage.webp");

    function toggleTheme() {
        setTheme(prev => prev === "light" ? "dark" : "light");
    }
    function changeName(newName) {
        setName(newName);
    }
    function toggleLogin() {
        setIsLoggedIn(prev => !prev);
    }
    function changeImage(newImage) {
        setImage(newImage);
    }

    const ctxValue = {
        theme,
        toggleTheme,
        name,
        changeName,
        isLoggedIn,
        toggleLogin,
        image,
        changeImage
    };

    return (
        <UserContext.Provider value={ctxValue}>
            {children}
        </UserContext.Provider>
    );
}

UserContextProvider.propTypes = {
    children: PropTypes.node
}