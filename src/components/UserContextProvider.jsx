import { createContext, useState } from "react";
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
    storeLocal: () => { },
    getLocal: () => { },
});

export default function UserContextProvider({ children }) {
    console.log("context rendered");
    const [name, setName] = useState("test");
    const [email, setEmail] = useState("test");
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

    const ctxValue = {
        name,
        changeName,
        email,
        changeEmail,
        isLoggedIn,
        changeIsLoggedIn,
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