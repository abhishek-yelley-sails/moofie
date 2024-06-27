import { redirect } from "react-router-dom";
import { comparePassword } from "../utils/util";

export default async function loginAction({ request }, ctxValue) {

    if (ctxValue.isLoggedIn) {
        return redirect('/');
    }
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");

    const errors = {};
    const user = JSON.parse(localStorage.getItem("users") || "[]").find((user) => (email === user.email));

    if (!user) {
        errors.email = "Incorrect email!";
    } else {
        const isValid = await comparePassword(password, user.hashedPassword);
        if (!isValid) {
            errors.password = "Incorrect password!";
        } else {
            ctxValue.login(user);
            return redirect('/');
        }
    }
    return errors;
}