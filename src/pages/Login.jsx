import { Link, Form } from "react-router-dom";
import { useState } from "react";
import { Input, Button } from "@mui/material";

export default function Login() {
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });

    function handleChange(e) {
        setFormValues(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    return (
        <div className="LoginFormContainer">
            <h1 style={{color: "black"}}>Log In</h1>
            <Form method="post" style={{ color: "white" }} className="LoginForm">

                <Input sx={{fontWeight: 600}} placeholder="Email" type="email" name="email" value={formValues.email} onChange={handleChange} />
                <br/>

                <Input sx={{fontWeight: 600}} placeholder="Password" type="password" name="password" value={formValues.password} onChange={handleChange} />
                <br/>

                <br/>
                <Button sx={{width: "max-content", alignSelf: "center"}} type="submit" variant="contained">Log In</Button>
                <br/>
                {/* <button type="submit">Sign up</button> */}
            </Form>
            <Link style={{color: "black", fontWeight: 500}} to="/signup">Do not have an account? Sign Up</Link>
        </div>
    );
}