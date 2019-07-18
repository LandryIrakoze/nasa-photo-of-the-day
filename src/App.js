import React from "react";
import "./App.css";

import Data from './Data';
import { Background } from './Styles';

function App() {
  return (
    // <div className="App">
    //   <p>
    //     Read through the instructions in the README.md file to build your NASA
    //     app! Have fun 🚀!
    //   </p>
    <Background>
      <Data />
    </Background>
    // </div>
  );
}

export default App;
