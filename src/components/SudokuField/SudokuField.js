import './SudokuField.css'

function SudokuField(props) {
  
    const handleChange = e => {
        let value = props.field.value === "" ? "" : parseInt(e.target.value, 10);
        props.onChange({ ...props.field, value: value });
    }

    return (
        <input className="cell" 
            value={props.field.value || ""} 
            readOnly={props.field.readonly} 
            onChange={handleChange}
            type="text" 
            min="1" max="9" 
            maxLength="1" 
        />
    )
}

export default SudokuField;