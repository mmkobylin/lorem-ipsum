import './App.css';
import React, { useState } from 'react';
// import data from './data';

function App() {

  // paragraph amount set up as 0.
  const [ count, setCount ] = useState(0); 
  // empty array.
  const [state, setstate] = useState([]);

  let handleSubmit = (e) => {
    // stops the reloading of the webpage
    e.preventDefault();
  }

  const handleChange = (e) => {
    e.preventDefault()
    console.log('hello')
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
        <p>
          Lorem ipsum dolor sit amet, latte chilli elit, pakora do eiusmod tempor sorbet chai labore et dolore magna samosas. Chilli wrap ad falafel veniam, tapas nostrud exercitation ullamco wrap hallumi ut aliquip ex ea wrap chilli. Latte aute irure dolor cheakpeas reprehenderit in chilli velit cheesecake sorbet latte eu cheesecake falafel pariatur. Falafel chai occaecat cupidatat wrap couscous, hummus in hallumi cheesecake officia deserunt latte falafel pakora est laborum.
        </p>

      </header>
    </div>
  );
}

export default App;
