import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import "./Calculator.css";
import { useSelector, useDispatch} from 'react-redux';
import { loadAnswer, loadBackspace, loadButtons, loadClear } from "./redux/calculatorRedux/actions";

// TODO: 1. Handle Error 2. Deploy 3. Make PWA

function Calculator() {
  // Once "=" key press, user not allowed for backspace of result untill anyother key pressed
  const [activeClearBtn, setActiveClearBtn] = React.useState(true);
  const [errorEncouter, setErrorEncounter] = React.useState(false);

  const dispatch = useDispatch();
  const { number, ans } = useSelector((state)=> state.calculator);

  React.useEffect(() => {
    if (ans === 'Error') {
      setErrorEncounter(true);
    }
  }, [ans])

  const onClickAnswer = () => {
    setActiveClearBtn(false);
    /* Ans state changes not happen immediatly to check "Error" condition
    So, I have taken useEffect with [ans] dependency and It is invoked when ans state changes
    and we can easily check the 'Error' condition after state update. */
    dispatch(loadAnswer());
  }

  const handleKeyButton = (sign) => {
    setActiveClearBtn(true)
    dispatch(loadButtons(sign))
  }

  const handleClear = () => {
    dispatch(loadClear());
    setActiveClearBtn(true);
    setErrorEncounter(false)
  }

  return (
    <div className="app">
      {/* <pre>{JSON.stringify({number, ans})}</pre> */}
      <div className="home">
        {/* Title */}
        
        <div className="header">
          <GiHamburgerMenu />
          <span>Calculator App</span>
        </div>
        {/* Screen */}
        <div className="screen">
          <input
            type="text"
            placeholder="0"
            value={number}
            readOnly
            className="screen-input"
          />
          {ans === "Error" && <span className='Error_note'>Press <b>AC</b> button to Reset Calculator</span>}
        </div>
        {/* Touchpad */}
        <div className="touchpad">
          <button className="pad-btn operator" onClick={handleClear}>AC</button>
          <button className="pad-btn operator" onClick={()=> dispatch(loadBackspace())} disabled={!activeClearBtn || errorEncouter}>C</button>
          <button className="pad-btn operator" onClick={() => handleKeyButton('/')} disabled={errorEncouter} >/</button>
          <button className="pad-btn operator" onClick={() => handleKeyButton('+')} disabled={errorEncouter} >+</button>

          <button className="pad-btn" onClick={() => handleKeyButton(7)} disabled={errorEncouter}>7</button>
          <button className="pad-btn" onClick={() => handleKeyButton(8)} disabled={errorEncouter}>8</button>
          <button className="pad-btn" onClick={() => handleKeyButton(9)} disabled={errorEncouter}>9</button>

          <button className="pad-btn" onClick={()=> handleKeyButton(4)} disabled={errorEncouter}>4</button>
          <button className="pad-btn" onClick={()=> handleKeyButton(5)} disabled={errorEncouter}>5</button>
          <button className="pad-btn" onClick={()=> handleKeyButton(6)} disabled={errorEncouter}>6</button>
          <button className="pad-btn operator" onClick={()=> handleKeyButton('-')} disabled={errorEncouter}>&#8722;</button>

          <button className="pad-btn" onClick={()=> handleKeyButton(1)} disabled={errorEncouter}>1</button>
          <button className="pad-btn" onClick={()=> handleKeyButton(2)} disabled={errorEncouter}>2</button>
          <button className="pad-btn" onClick={()=> handleKeyButton(3)} disabled={errorEncouter}>3</button>
          <button className="pad-btn operator" onClick={()=> handleKeyButton('*')} disabled={errorEncouter}>&#215;</button>

          <button className="pad-btn" onClick={()=> handleKeyButton('.')} disabled={errorEncouter}>&#183;</button>
          <button className="pad-btn" onClick={()=> handleKeyButton(0)} disabled={errorEncouter}>0</button>
          <button className="pad-btn operator" onClick={onClickAnswer} disabled={errorEncouter}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
