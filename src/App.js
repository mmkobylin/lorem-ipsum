import { Helmet } from "react-helmet";
import './App.css';
import React from 'react';
import Form from './component/Form';
import Info from './component/Info';
import Header from './component/Header';
import Paragraph from './component/Paragraph';


function App() {

  // paragraph amount set up as 0.
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hipster Lorem Ipsum</title>
      </Helmet>
      <Header/>
      <Paragraph/>

      {/* <Info/>
      <Form/> */}

    </>
  );
}

export default App;
