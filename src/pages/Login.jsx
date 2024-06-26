import { Link, Form, useActionData } from "react-router-dom";
import { useState } from "react";
import { Input, Button } from "@mui/material";

export default function Login() {
    const errors = useActionData();
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
                {errors?.email ? <span style={{color: "red"}}>{errors.email}</span> : <br/>}

                <Input sx={{fontWeight: 600}} placeholder="Password" type="password" name="password" value={formValues.password} onChange={handleChange} />
                {errors?.password ? <span style={{color: "red"}}>{errors.password}</span> : <br/>}

                <br/>
                <Button sx={{width: "max-content", alignSelf: "center"}} type="submit" variant="contained">Log In</Button>
                <br/>
                {/* <button type="submit">Sign up</button> */}
            </Form>
            <Link style={{color: "black", fontWeight: 500}} to="/signup">Do not have an account? Sign Up</Link>
        </div>
    );
}