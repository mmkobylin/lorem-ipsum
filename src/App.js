import './App.css';
import React, { useState } from 'react';
import data from './data';

function App() {

  // paragraph amount set up as 0.
  const [ count, setCount ] = useState(0); 
  // empty array.
  const [text, setText] = useState([]);

  let handleSubmit = (e) => {
    // stops the reloading of the webpage
    e.preventDefault();
    console.log('hello')
  }

  const handleChange = (e) => {
    e.preventDefault()
    setText(data);

  }
 
  
  return (
    <div className="section-center">
      <h3>Hipster food lorem ipsum.</h3>

      <p>{count}</p>
      <form
        onSubmit = { handleSubmit }
      >
        <label htmlFor="amount">Paragraphs?</label>
        <input 
        name="amount" id="amount" type="number" min = "0" max = "10"
        // input controlled - by setCount changing count to e.target.value
        //e sets event 
        onChange = { (e) => setCount(e.target.value ) }
        
        ></input>
        <button type ="submit" className="btn">generate</button>
      </form>
      <header className="App-header">

      <article className="lorem-text">
        {/* {Text.map (( item, index) => {
          return
        })} */}
      </article>

      </header>
    </div>
  );
}

export default App;
