import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchField() {
    const [inputField, setInputField] = useState('');
    const navigate = useNavigate();

    function handleInputChange(e) {
        setInputField(e.target.value);
        // navigate(`/?query=${e.target.value}`);
    }

    function handleSubmit(e) {
        e.preventDefault();
        navigate(`/?query=${inputField}`);
    }

    return (
        <div className='SearchField'>
            <div style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row"
            }} >
                <label
                    className="TextLabel"
                    htmlFor="searchField"
                >
                    Search Field
                </label>
            </div>
            <form onSubmit={handleSubmit}>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row"
                }} >
                    <input
                        className="TextInputField"
                        id="searchField"
                        placeholder={"Type here..."}
                        type="text"
                        name="searchField"
                        value={inputField}
                        onChange={handleInputChange}
                    />
                    <button className="SearchBtn" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}