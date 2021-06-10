import './App.css';
import React from 'react';
import Article from './component/Article';
import Form from './component/Form';
import Header from './component/Header';

// import Map_component from './Map_component';
// passing data from another 
import data from './data';

function App() {

  // paragraph amount set up as 0.
  return (
    <>      
      <Header/>
      <Form/>
      <Article/>

    </>
  );
}

export default App;
