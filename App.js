import React from 'react';
import {StatusBar} from 'react-native'
import Home from "./Src/Screens/Home/Home"
const App = () =>{
  return(
    <>
    <StatusBar hidden={true} />
      <Home />
      </>
  )
}

export default App;
