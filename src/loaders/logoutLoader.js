import { redirect } from "react-router-dom";

export default function logoutLoader(loaderParams, ctxValue) {
    ctxValue.changeIsLoggedIn(false);
    return redirect('/');
}