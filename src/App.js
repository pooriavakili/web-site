import React,{useContext} from 'react';

import Header from "./components/Header";
import ContextProvider from "./stateManagment/Context";
function App() {
  useContext(ContextProvider);
  return (

   <Header/>
  );
}

export default App;
