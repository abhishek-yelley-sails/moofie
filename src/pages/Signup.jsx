import { useState } from "react";
import { Input, Button } from '@mui/material';
import { Link, Form, useActionData } from "react-router-dom";

export default function Signup() {
    const errors = useActionData();
    const [formValues, setFormValues] = useState({
        name: "",
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
            <h1 style={{color: "black"}}>Sign Up</h1>
            <Form method="post" style={{ color: "white" }} className="LoginForm">

                <Input sx={{fontWeight: 600}} placeholder="Name" type="text" name="name" value={formValues.name} onChange={handleChange} />
                {errors?.name ? <span style={{color: "red"}}>{errors.name}</span> : <br/>}

                <Input sx={{fontWeight: 600}} placeholder="Email" type="email" name="email" value={formValues.email} onChange={handleChange} />
                {errors?.email ? <span style={{color: "red"}}>{errors.email}</span> : <br/>}

                <Input sx={{fontWeight: 600}} placeholder="Password" type="password" name="password" value={formValues.password} onChange={handleChange} />
                {errors?.password ? <span style={{color: "red"}}>{errors.password}</span> : <br/>}

                <br/>
                <Button sx={{width: "max-content", alignSelf: "center"}} type="submit" variant="contained">Sign Up</Button>
                <br />
                {/* <button type="submit">Sign up</button> */}
            </Form>
            <Link style={{color: "black", fontWeight: 500}} to="/login">Already have an account? Log In</Link>
        </div>
    );
}