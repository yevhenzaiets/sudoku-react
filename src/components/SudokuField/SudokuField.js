import './SudokuField.css'

function SudokuField(props) {
    // const showElement = (e) => {
    //     let target = e.target;
    //     target.style.backgroundColor = "rgba(0,109,240,0.16)";
    //     target.textContent = "";        
    // }

    return <input className="cell" value={props.field.value} />
}

export default SudokuField;