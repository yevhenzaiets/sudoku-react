import './Main.css'
import SudokuField from '../SudokuField/SudokuField';
import GameControls from '../GameControls/GameControls'

function Main(props) {
    return (
        <div className='main'>
            <div className='mainWrapper'>
                {props.sudoku.rows.map(row => 
                    <div className="row" key={row.index}>
                        {row.cols.map(field => (
                            <SudokuField field={field} key={field.col} onChange={props.onChange} />
                        ))}
                    </div>
                )}
            </div>
            <GameControls />
        </div>
    )
}
  
export default Main;

