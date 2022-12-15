import './Main.css'
import SudokuField from '../SudokuField/SudokuField';

function Main(props) {
    return (
        <div className='mainWrapper'>
            {props.sudoku.rows.map(row => 
                <div className="row" key={row.index}>
                    {row.cols.map(field => (
                        <SudokuField field={field} key={field.col} />
                    ))}
                </div>
            )}
        </div>
    )
}
  
export default Main;

// {props.row.cols.map(field => 
//     <SudokuField field={props.col} key={field.col}/>
// )}