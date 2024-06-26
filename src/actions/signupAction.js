import { redirect } from "react-router-dom";

export default async function signupAction({ request }) {
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

    // return data if we have errors
    if (Object.keys(errors).length) {
        return errors;
    }
    return redirect("/login");
}