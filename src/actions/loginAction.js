import { redirect } from "react-router-dom";
import { comparePassword } from "../utils/util";

export default async function loginAction({ request }, ctxValue) {
    
    if(ctxValue.isLoggedIn) {
        return redirect('/');
    }
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");

    const errors = {};
    const user = JSON.parse(localStorage.getItem("users") || "[]").find(async (user) => (user.email === email && await comparePassword(password, user.hashedPassword)));

    if(user) {
        ctxValue.changeName(user.name);
        ctxValue.changeEmail(email);
        ctxValue.changeIsLoggedIn(true);
        return redirect('/');
    }

    if(JSON.parse(localStorage.getItem("users") || "[]").find((user) => (user.email === email)))
        errors.email = "Incorrect email"
    else
        errors.password = "Incorrect password"
    return errors;
}