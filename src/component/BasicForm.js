import React, { useState } from 'react'

const BasicForm = () => {

    const [count, setCount] = useState(0);

    const [ text, setText] = useState([]);

    let handleSubmit = (e, array) => {
        // stops the reloading of the webpage
        e.preventDefault();
        
        // this part defines the amount of paragraphs.
        if (array.length < count ) { 
          // how many times we need the array???
          setText((array.concat(array)).slice(0, count));

        }
    }

    let handleChange = (e) => {
        setCount( e.target.value);
    }

    return (
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
                    className = 'change' 
                    disabled = { !count }  
                    // changing the button cursor depending if the count is empty
                    style = { !count ? { cursor: 'not-allowed' } : { cursor: 'pointer'} }
                    type ="submit"
                    className="btn"
                >Lorem
                </button>
            </form>
      </section>
    )
    
}

export default BasicForm
