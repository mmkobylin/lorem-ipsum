import React, { useState } from 'react'
import data from '../data';

const Form = () => { 

  const [count, setCount] = useState(0);

  // empty array
  const [ text, setText ] = useState([])

  //we gotta change info first, then slice it
  const [ words, setWords ] = useState(data)

  let handleSubmit = (e) => {
    // stops the reloading of the webpage
    e.preventDefault();
    
    // this part defines the amount of paragraphs.
    if (data.length < count ) { 
      // how many times we need the data???
      setText((data.concat(data)).slice(0, count));
    } else {
    
      for (let i = 0; i < words.length; i++) {  
        // displaying FOR EACH ITEM, whoo!

        const newWords = words[i].toString().split(/\s/g);
        console.log(newWords);

        for ( let j = 1; j < newWords.length - 1; j++ ) {

          function randomise() {
            // checking each item in newWords array except last one,
            var lastChar = newWords[j][newWords[j].length - 1];

            var foodRandom = ['chilli', 'cheesecake', 'chai', 'latte', 'sorbet',  'wrap', 'falafel', 'hallumi', 'tapas', 'samosas', 'couscous', 'pakora', 'spicy', 'hummus', 'cheakpeas'];

            // randomising variable
            var random = foodRandom[Math.floor(Math.random()*foodRandom.length)];

            // sorting punctuation
            if (lastChar === ',' ) {
                // items in array randomiezed and floored
                newWords[j] = random + ',' ;
            }
            else if  (lastChar === '.' ) {
                newWords[j] = random + '.';
            }
            else {
                newWords[j] = random;
            }
          }

          // sorting capitals
          function capitals() {
            if (newWords[j-1][newWords[j-1].length - 1] === '.' ) {
              // capitalize first letter //slice first letter of the word and add rest
              newWords[j] = newWords[j].charAt(0).toUpperCase() + newWords[j].slice(1);
            }
          }

          function duplication() {
            // using slice as it has to ignore dots and capitals.
            if (newWords[j].slice(1,3) === newWords[j - 1].slice(1,3)) {
              newWords[j] = 'smoothie';
            }
          }        
          // check for each word;
          if (Math.random() < 0.5 ) {
            randomise();
          }

          capitals(duplication());
          // duplication();

          //joins the new item to array. bu no means perfect, but it seems to be working 
          const paragraph = [];
          //creating spaces between words
          paragraph.push(newWords.join(' '));

          const entireText = [];
          // entireText = entireText.concat(paragraph);
          setWords(entireText.concat(paragraph));
          console.log(entireText.length)

        };
        setText(words)
      }
    }
  }

  let handleChange = (e) => {
    setCount( e.target.value);
  }

    return (
      <>
        {/* {words.map((paragraph, index) => (
          <p className = 'break' key={index}>{paragraph}</p>
        ))} */}
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
