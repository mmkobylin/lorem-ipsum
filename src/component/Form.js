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
    
      setText(data.slice(0, count ))

      for (let i = 0; i < text.length; i++) {  
        // displaying FOR EACH ITEM, whoo!

        text[i] = text[i].split(/\s/g);

        for ( let j = 0; j < text[i].length; j++ ) {

          function randomise() {
            // checking each item in words array except last one,
            var lastChar = text[i][j][text[i][j].length - 1];

            var foodRandom = ['chilli', 'cheesecake', 'chai', 'latte', 'sorbet',  'wrap', 'falafel', 'hallumi', 'tapas', 'samosas', 'couscous', 'pakora', 'spicy', 'hummus', 'cheakpeas'];

            // randomising variable
            var random = foodRandom[Math.floor(Math.random()*foodRandom.length)];

            // sorting punctuation
            if (lastChar == ',' ) {
                // items in array randomiezed and floored
                text[i][j] = random + ',' ;
            }
            else if  (lastChar == '.' ) {
                text[i][j] = random + '.';
            }
            else {
                text[i][j] = random;
            }
          }

          // check for each word;
          if (Math.random() < 0.5 ) {
            randomise();
          }

          //joins the new item to array. bu no means perfect, but it seems to be working 
          const paragraph = [];
          paragraph.push(text.join(' '));
          setWords(paragraph);
          console.log(words.length)
        };
      }
    }
  }

  let handleChange = (e) => {
    setCount( e.target.value);
  }

    return (
      <>
        <p> { words } </p>
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
        {text.map((paragraph, index) => (
          <p className = 'break' key={index}>{paragraph}</p>
        ))}
    </article>
      </>
    )
}

export default Form
