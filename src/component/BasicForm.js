import React, { useState } from 'react'

const BasicForm = () => {

    const [counter, setCounter] = useState(0);

    const [ text, setText] = useState([]);

    let handleSubmit = (e) => {
        // stops the reloading of the webpage
        e.preventDefault();
        console.log(counter);
        
        // this part defines the amount of paragraphs.
        // if (array.length < count ) { 
        //     how many times we need the array???
        //     setText((array.concat(array)).slice(0, count));
        // }
    }

    let handleChange = (e) => {
        setCounter( e.target.value);
    }

    // plus and minus! cause normal way of using things does not work in firefox lol
    let incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);
    // dealing with negative values
    if(counter<=0) { decrementCounter = () => setCounter(0); };

    return (
        <section className="section-center">
            <form 
            // making sure that the submitting form is an option
            onSubmit = { handleSubmit }
            >
                <p>Paragraphs?</p>
                <button onClick={incrementCounter}
                style = { { cursor: 'pointer'} }
                >+</button>
                <p className = 'counter'
                // value = { counter }
                //e sets event 
                onChange = { handleChange }
                >{ counter } </p>
                <button 
                style = { !counter ? { cursor: 'not-allowed' } : { cursor: 'pointer'} }
                disabled = { !counter  }  
                onClick={decrementCounter}>-</button>

                <button 
                    className = 'change btn' 
                    disabled = { !counter  }  
                    // changing the button cursor depending if the counters empty
                    style = { !counter ? { cursor: 'not-allowed' } : { cursor: 'pointer'} }
                    type ="submit"
                >Submit
                </button>
            </form>
      </section>
    )
    
}

export default BasicForm
