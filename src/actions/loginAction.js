import { redirect } from "react-router-dom";

export default async function loginAction({ request }, ctxValue) {

    if(ctxValue.isLoggedIn) {
        return redirect('/');
    }
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");

    if(email === localStorage.getItem('email') && password === localStorage.getItem('password'))
        return redirect('/');
    
    const errors = {};
    if(email !== localStorage.getItem('email'))
        errors.email = "Incorrect email"
    else
        errors.password = "Incorrect password"
    return errors;
}