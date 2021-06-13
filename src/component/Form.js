import React, { useState } from 'react'
import data from '../data';

// const declared
const Form = () => { 

    const [count, setCount] = useState(0);

    // empty array
    const [ text, setText ] = useState([])

  
  let handleSubmit = (e) => {
    // stops the reloading of the webpage
    e.preventDefault();
    
    // this part defines the amount of paragraphs.
    if (data.length < count ) { 
      // how many times we need the data???
      // const multiplier = Math.ceil(count/data.length);
      setText((data.concat(data)).slice(0, count));

    } else {
      setText(data.slice( 0, count));
    }
  }

    return (
      <>
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

            className="btn"
          >Lorem
          </button>
        </form>
      </section>
      <article className="lorem-text">
        { text.map( ( index, value ) => {
          <p key = { index }>{ value } </p>
        } ) 
        }
      </article>
      </>
    )
}

export default Form
