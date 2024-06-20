import SearchField from "./SearchField.jsx";
import MovieResults from "./MovieResults.jsx";
import { useState } from "react";

export default function SearchBox() {
    const [inputField, setInputField] = useState('');
    return (
        <div className="SearchBox">
            <SearchField value={inputField} onChange={(e) => setInputField(e.target.value)} />
            {inputField &&
                <MovieResults query={inputField} />
            }
        </div>
    )
}