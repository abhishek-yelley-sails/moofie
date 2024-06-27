import { redirect } from "react-router-dom";

export default function loginLoader(loginParams, ctxValue) {
    if(ctxValue.isLoggedIn) {
        return redirect('/');
    }
    return null;
}