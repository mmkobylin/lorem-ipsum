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

  let handleChange = (e) => {
    e.preventDefault()
    setCount(count = count++ )
    
  }
 
  
  return (
    <div className="section-center">
      <h3>Hipster food lorem ipsum.</h3>

      <p>{count}</p>
      <form
        onSubmit = { handleSubmit }
      >
        <input name="amount" type="number"></input>
        <button onClick = { handleChange }>Submit</button>
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
