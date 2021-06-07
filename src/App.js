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
   
    // this part defines the amount of paragraphs.
    if (data.length < count ) { 
      // how many times we need the data???
      // const multiplier = Math.ceil(count/data.length);

      const dataPlus = data.concat(data);

      setText(dataPlus.slice(0, count));

    } else {

      var newData = data.slice( 0, count);

      setText(newData);
    }
  }


    //  for (var i = 0; i < data.length; i++) {
    //   // displays each array sepearately; good!
    //     const words = data[i].trim().split(" ");

    //     for (var j = 3; j < words.length; j++) {
        
    //       function randomise() {
    //           // checking each item in words array except last one,
    //           var lastChar = words[j][words[j].length - 1];
  
    //           var foodRandom = ['chilli', 'cheesecake', 'chai', 'latte', 'sorbet',  'wrap', 'falafel', 'hallumi', 'tapas', 'samosas', 'couscous', 'pakora', 'spicy', 'hummus', 'cheakpeas'];
  
    //           // randomising variable
    //           var random = foodRandom[Math.floor(Math.random()*foodRandom.length)];
  
    //           // sorting punctuation
    //           if (lastChar === ',' ) {
    //             // items in array randomiezed and floored
    //             words[j] = random + ',' ;
    //           }
    //           else if  (lastChar === '.' ) {
    //             words[j] = random + '.';
    //           }
    //           else {
    //             words[j] = random;
    //           }
    //       }
      
    //       // sorting capitals
    //       function capitals() {
    //         if (words[j - 1][words[j-1].length - 1] === '.' ) {
    //           // capitalize first letter //slice first letter of the word and add rest
    //           words[j] = words[j].charAt(0).toUpperCase() + words[j].slice(1);
    //         }
    //       }
          
    //       function duplication() {
    //         // using slice as it has to ignore dots and capitals.
    //         if (words[j].slice(1,3) === words[j - 1].slice(1,3) ) {
    //           randomise();
    //         }
    //       }        
  
    //       // check for each word;
    //       if (Math.random() < 0.5 ) {
    //         randomise();
    //       }
  
    //       // check for duplicates, then changes to capitals;
    //       duplication()
    //       capitals()
    //     }

    //     // displays each array sepearately; good!
    //     console.log(words)
    //  }
 
  return (
    <>      
      <h3>Hipster food lorem ipsum.</h3>

      { text.map ( ( item, index ) => {

        var words = item.trim().split(" ");

        for (var i = 3; i < words.length; i++) {
        
        function randomise() {
          // checking each item in words array except last one,
          var lastChar = words[i][words[i].length - 1];

          var foodRandom = ['chilli', 'cheesecake', 'chai', 'latte', 'sorbet',  'wrap', 'falafel', 'hallumi', 'tapas', 'samosas', 'couscous', 'pakora', 'spicy', 'hummus', 'cheakpeas'];

          // randomising variable
          var random = foodRandom[Math.floor(Math.random()*foodRandom.length)];

          // sorting punctuation
          if (lastChar == ',' ) {
            // items in array randomiezed and floored
            words[i] = random + ',' ;
          }
          else if  (lastChar == '.' ) {
            words[i] = random + '.';
          }
          else {
            words[i] = random;
          }
        }
    
      // sorting capitals
      function capitals() {
        if (words[i - 1][words[i-1].length - 1] == '.' ) {
          // capitalize first letter //slice first letter of the word and add rest
          words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
      }
          
      function duplication() {
        // using slice as it has to ignore dots and capitals.
        if (words[i].slice(1,3) == words[i - 1].slice(1,3) ) {
          randomise();
        }
      }        

        // check for each word;
      if (Math.random() < 0.5 ) {
          randomise();
      }

        // check for duplicates, then changes to capitals;
        duplication()
        capitals();
      }     
      return <p key = { index } > { words.join(' ') } </p>
    })}

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
      { text.map ( ( item, index ) => {
        return <p key = { index } > { item } </p>
      })}
    </article>

    </>
  );
}

export default App;
