import React, { useState } from 'react'
import data from '../data';

// const declared
const Form = () => { 

  const [count, setCount] = useState(0);

  // empty array
  const [ text, setText ] = useState([])

  const [ words, setWords ] = useState([])


  let handleSubmit = (e) => {
    // stops the reloading of the webpage
    e.preventDefault();
    
    // this part defines the amount of paragraphs.
    if (data.length < count ) { 
      // how many times we need the data???
      setText((data.concat(data)).slice(0, count));
    } else {
      const info = ((data.slice( 0, count)).map( (value, index) => {

        // makes it words
        setWords(value.trim().split(" "));

        for ( var i = 0; i < index; i++ ) {

          console.log(words[i]);
        }
      } ) );
    
      setText(info)

    }
  }

  let handleChange = (e) => {
    setCount( e.target.value);
  }

    return (
      <>
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
          onChange = { handleChange }
          
          ></input>
          <br></br>
          <button 
            // 
            disabled = { !count }  
            // changing the button cursor depending if the count is empty
            style = { !count ? { cursor: 'not-allowed' } : { cursor: 'pointer'} }
            type ="submit"

            className="btn"
          >Lorem
          </button>
        </form>
      </section>
      <article className="lorem-text">
        { words ? words : null }
    </article>
      </>
    )
}

export default Form
