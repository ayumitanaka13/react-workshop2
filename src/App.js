import {useState, useEffect} from 'react';
import './App.css';

import axios from 'axios';


function App() {

  /* #1 - practice useState */
  
  // Normal varialble (javascript / not rendering)
  let normalVariable = 0;
  const setNormalVariable = () => {
    normalVariable = normalVariable + 1;
    console.log(normalVariable)
  }

  // State of React (react / rendering(change html))
  // const [initialValue(変更したい値), setValue] = [0, f]
  const [count, setCount] = useState(0);
  const setStateVariable = () => {
    setCount(count + 1);
  }

  // Practice get input value
  const [inputName, setInputName] = useState('')
  const onChangeHandler = (event) => {
    setInputName(event.target.value)
  }

  /* #2 - practice useEffect */

  // useEffect works after redering
  // useEffect (arrow function, [empty array])

  useEffect(() => {
    // alert("stop");
    // document.getElementById("card").style.background = "bisque";
    // document.getElementById("text").style.color = "orange";

    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => setData(res.data))
      .catch(err => console.log("customer message " + err))

    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then(res => res.json())
    //   .then(data => setData(data))
    //   .catch(err => console.log("customer message " + err))
  }, [])

  // useState with data
  const [data, setData] = useState([])
  const deleteHandler = (event) => {
    //console.log(event.target)
    const newData = data.filter((el, index) => {
      //change id to number
      return index !== parseInt(event.target.id)
    })
    //overwite with setData
    setData(newData)
  }

  return (
    <div className="container">

      {/* old card */}
      {/*
      <div className="card" id="card">
        <div id="text">
          <p>hello world</p>
          <h1>Title</h1>
          <p>content</p>
          <br />
          <button onClick={setNormalVariable}>NormalCount</button>
          <button onClick={setStateVariable}>StateCount</button>
          <div>{`NormalVariable: ${normalVariable}`}</div>
          <div>{`StateVariable: ${count}`}</div>
          <br />
          <input type="text" onChange={onChangeHandler} placeholder="Get value test"/>
          <div>{inputName}</div>
        </div>
      </div>
      */}

      {/* new card */}
      {data.map((el, index) => (
        <div className="card" id="card">
        <div id="text">
          <p>{el.id}</p>
          <h2>{el.title}</h2>
          <p>{el.body}</p>
          <button onClick={deleteHandler} id={index}>Delete</button>
        </div>
      </div>
      ))}

    </div>
  );
}

export default App;
