import PropTypes from 'prop-types';

export default function SearchField({ value, onChange }) {
    return (
        <div className='SearchField'>
            <div style={{ display: "flex", justifyContent: "center", flexDirection: "row" }} >
                <label className="TextLabel" htmlFor="searchField">Search Field</label>
            </div>
            <div style={{ display: "flex", justifyContent: "center", flexDirection: "row" }} >
                <input className="TextInputField" id="searchField" placeholder={"Type here..."} type="text" name="searchField" value={value} onChange={onChange} />
            </div>
        </div>
    );
}

SearchField.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}