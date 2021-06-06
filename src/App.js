import './App.css';
import React, { useState } from 'react';
// passing data from another 
import data from './data';

function App() {

  // paragraph amount set up as 0.
  const [ count, setCount ] = useState(0); 
  // empty OBJECT for some fucking reason
  const [text, setText] = useState([]);

  let handleSubmit = (e) => {
    // stops the reloading of the webpage
    e.preventDefault();
    // sets up text
    // slices the amount of paragraphs in the data. 



    // this part defines the amount of paragraphs.
    if (data.length < count ) { 
      // how many times we need the data???

      const multiplier = Math.ceil(count/data.length);

      const dataPlus = data.concat(data);

      setText(dataPlus.slice(0, count));

    } else {
      setText(data.slice( 0, count));

    }
  }
 
  return (
    <>      
      <h3>Hipster food lorem ipsum.</h3>

      <section className="section-center">

        <form
          // making sure that the submitting form is an option
          onSubmit = { handleSubmit }
        >
          <label htmlFor="amount">Paragraphs?</label>
          <input 
          name="amount" id="amount" type="number" min = "1"
          // input controlled - by setCount changing count to e.target.value
          //e sets event 
          onChange = { (e) => setCount( e.target.value ) }
          
          ></input>
          <br></br>
          {/* submit button */}
          <button 
            // 
            disabled = { !count }  
            // changing the button cursor depending if the count is empty
            style = { !count ? { cursor: 'not-allowed' } : { cursor: 'pointer'} }
            type ="submit" 
            className="btn">generate</button>
        </form>
    </section>

    <article className="lorem-text">
      { text.map ( ( item, index ) => {
        return <p key = { index } > { item } </p>

      })}
    </article>

    </>
  );
}

export default App;
