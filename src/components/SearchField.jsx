import { useState } from 'react';
import { Form } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

export default function SearchField() {
    const [inputField, setInputField] = useState('');
    // const navigate = useNavigate();

    function handleInputChange(e) {
        setInputField(e.target.value);
        // navigate(`/?query=${e.target.value}`);
    }

    /*
    function handleSubmit(e) {
        e.preventDefault();
        navigate(`/?query=${inputField}`);
    }
    */

    return (
        <div className='SearchField'>
            <div style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row"
            }} >
                <label
                    className="TextLabel"
                    htmlFor="query"
                >
                    Search Field
                </label>
            </div>
            <Form method="get" action="/search" >
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row"
                }} >
                    <input
                        className="TextInputField"
                        id="query"
                        placeholder={"Type here..."}
                        type="text"
                        name="query"
                        value={inputField}
                        onChange={handleInputChange}
                    />
                    <input name="page" value="1" hidden/>
                    <button className="SearchBtn" type="submit">Submit</button>
                </div>
            </Form>
        </div>
    );
}