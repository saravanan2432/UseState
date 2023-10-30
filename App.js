*********** Using UseState Example *****************
APP.JS 
----------

import React from 'react'
import { useState } from 'react';
import Header from './Header';

const App= ()=> {
const [name,setName]=useState("Learning")

  function NameHandleChange(){
    const names=["Testing", "Trail", "Learning"]
    const lett=Math.floor(Math.random()*3)
    setName (names[lett])
  }
  return (
    <div>
       <h2>Welcome</h2>
       <p>This {name} Purpose</p>
       <button id='btn' onClick={NameHandleChange}>Subcribe</button>
    <Header />
    </div>
  )
}

export default App
