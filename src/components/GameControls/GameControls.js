import Button from '../Button/Button';
import s from './GameControls.module.css'

const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '⮎','✅', '❌'];

function GameControls() {
    
    const buttonItem = values.map(val => <Button value= {val} />);
    // console.log(val);
    return <div className="controls-wrapper">
        <div className={s.controlsBlock}>
            {buttonItem}          
        </div>
    </div>
}

export default GameControls;