import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const UserContext = createContext({
    name: "",
    changeName: () => { },
    isLoggedIn: false,
    toggleLogin: () => { },
    image: "",
    changeImage: () => { }
});

export default function UserContextProvider({ children }) {
    const [name, setName] = useState("test");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [image, setImage] = useState("/defaultProfileImage.webp");

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