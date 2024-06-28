import { createContext, useState, useEffect, useCallback } from "react";
import PropTypes from 'prop-types';

export const UserContext = createContext({
    name: "",
    changeName: () => { },
    email: "",
    changeEmail: () => { },
    isLoggedIn: false,
    changeIsLoggedIn: () => { },
    image: "",
    changeImage: () => { },
    login: () => { },
    logout: () => { },
});

export default function UserContextProvider({ children }) {
    console.log("context rendered");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [image, setImage] = useState("/defaultProfileImage.webp");

    function changeName(newName) {
        setName(newName);
    }
    function changeIsLoggedIn(newState) {
        setIsLoggedIn(newState);
    }
    function changeImage(newImage) {
        setImage(newImage);
    }
    function changeEmail(newEmail) {
        setEmail(newEmail);
    }
    const login = useCallback(function login(newUser) {
        changeName(newUser.name);
        changeEmail(newUser.email);
        changeIsLoggedIn(true);
        changeImage(newUser.image);
        localStorage.setItem("currentUser", newUser.email);
    }, []);
    function logout() {
        changeName("");
        changeEmail("");
        changeIsLoggedIn(false);
        changeImage("/defaultProfileImage.webp");
        localStorage.removeItem("currentUser");
    }

    useEffect(() => {
        const curEmail = localStorage.getItem("currentUser");
        if (curEmail) {
            const curUser = JSON.parse(localStorage.getItem("users") || "[]").find((item) => curEmail === item.email);
            if (curUser) {
                login(curUser);
            }
        }
    }, [login]);

    const ctxValue = {
        name,
        changeName,
        email,
        changeEmail,
        isLoggedIn,
        changeIsLoggedIn,
        image,
        changeImage,
        login,
        logout,
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