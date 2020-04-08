import React from 'react';
import Applynodues from './Components/Applynodues';
import {BrowserRouter,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      

      <BrowserRouter>
        <Route path="/" component={Applynodues} />
      </BrowserRouter>
    </div>
  );
}

export default App;
