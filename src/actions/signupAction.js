import { redirect } from "react-router-dom";
import { hashPassword } from "../utils/util";

export default async function signupAction({ request }, ctxValue) {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const errors = {};
    if (typeof name !== "string" || name.includes("@") || name.includes("$")) {
        errors.name =
            "That doesn't look like a name";
    }
    if (typeof email !== "string" || !email.includes("@")) {
        errors.email =
            "That doesn't look like an email address";
    }
    if (typeof password !== "string" || password.length < 8) {
        errors.password = "Password must be ≥ 8 characters";
    }

    const allUsers = JSON.parse(localStorage.getItem("users") || "[]");

    if (allUsers.find((item) => item.email === email)) {
        errors.email = "User with email already exists";
    }

    if (Object.keys(errors).length) {
        return errors;
    }

    // all checks passed so far
    localStorage.setItem("users", JSON.stringify(
        [
            ...JSON.parse(localStorage.getItem("users") || "[]"),
            {
                name,
                email,
                hashedPassword: await hashPassword(password)
            }
        ]
    ));

    ctxValue.changeName(name);
    ctxValue.changeEmail(email);
    ctxValue.changeIsLoggedIn(true);

    return redirect("/login");
}