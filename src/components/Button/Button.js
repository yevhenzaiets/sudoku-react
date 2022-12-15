import s from './Button.module.css'

function Button(props) {

    const getCurrentBtn = (e) => {
        let target = e.target;
        target.style.backgroundColor = "rgba(0,109,240,0.16)";
        let currentNum = target.value;
        console.log(currentNum)
    }

    return <div className={s.buttonWrapper} onClick={getCurrentBtn}>
        <input className={s.buttonInp} type="button" value={props.value} /> 
    </div>
}

export default Button;