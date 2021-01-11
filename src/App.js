import {useState} from 'react';
import './App.css';


function App() {

  /* #1 - practice useState */
  
  // Normal varialble
  let normalVariable = 0;
  const setNormalVariable= () => {
    normalVariable = normalVariable + 1;
    console.log(normalVariable)
  }

  // State of React
  const [count, setCount] = useState(0);
  const setStateVariable = () => {
    setCount(count + 1);
  }

  // Practice get input value
  const [inputName, setInputName] = useState('')
  const onChangeHandler = (event) => {
    setInputName(event.target.value)
  }

  return (
    <div className="container">
      <div className="card">
        <div>
          <p>hello world</p>
          <h1>Title</h1>
          <p>content</p>
          <br />
          <button onClick={setNormalVariable}>NormalCount</button>
          <button onClick={setStateVariable}>StateCount</button>
          <div>{`NormalVariable: ${normalVariable}`}</div>
          <div>{`StateVariable: ${count}`}</div>
          {/* Get input value */}
          <br />
          <input type="text" onChange={onChangeHandler} placeholder="Get value test"/>
          <div>{inputName}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
