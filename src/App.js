import './App.css';
import React, { useState } from 'react';
// passing data from another 
import data from './data';

function App() {

  // paragraph amount set up as 0.
  const [ count, setCount ] = useState(0); 
  // empty OBJECT for some fucking reason
  const [text, setText] = useState([]);

  const [words, setWords] = useState(data)

  let handleSubmit = (e) => {
    // stops the reloading of the webpage
    e.preventDefault();

    // this part defines the amount of paragraphs.
    if (data.length < count ) { 
      // how many times we need the data???
      // const multiplier = Math.ceil(count/data.length);

      const dataPlus = data.concat(data);

      setText(dataPlus.slice(0, count));

    } else {
      setText(data.slice( 0, count));

    }
  }

  let handleClick = () => {
    // getting the data, iterating through each object.
    for (var i = 0; i < data.length; i++) {

      //splitting each item data[i] into an array
      const words = data[i].trim().split(" ");

      // add randomisation
      for (var j = 2; j < words.length; j++) {
        // displays words correctly

        if (Math.random() > 0.5 ) {
          // changes the 
          var foodRandom = ['chilli', 'cheesecake', 'chai', 'latte', 'sorbet',  'wrap', 'falafel', 'hallumi', 'tapas', 'samosas', 'couscous', 'pakora', 'spicy', 'hummus', 'cheakpeas'];

          var random = foodRandom[Math.floor(Math.random()*foodRandom.length)];

          words[j] = random;
        }
      }

      setWords(words);
      }
  }
 
  return (
    <>      
      <h3>Hipster food lorem ipsum.</h3>

      {/* displays data */}
      <p>{ words }</p>

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
            className="btn">Lorem</button>
          <button 
          disabled = { !count }  
          // changing the button cursor depending if the count is empty
          style = { !count ? { cursor: 'not-allowed' } : { cursor: 'pointer'} }
          onClick = { () => handleClick() } 
          >Hipsterise it</button>
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
