import React from 'react';
import './App.css';
import client from './contentfulclient.js';

const App = () => {
 
  
client.getEntries()
  .then((response) => console.log(response.items))
  .catch(console.error)


  return (
    <div className="App">
      <div className="container">
        <header>
          <div className="wrapper">
            <span>Recipe Blog</span>
          </div>
        </header>
        <main></main>
      </div>
    </div>
  );
}


export default App;
