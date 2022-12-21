import Header from "./Header"
import React from 'react';
import Webtext from './Webtext'
import Footer from './components/footer/footer.js'
function SearchFunc() {
  fetch("http://gis.vantaa.fi/rest/tyopaikat/v1")
  .then(response => response.json())
  .then((jsonData) => {
    // jsonData is parsed json object received from url
    console.log(jsonData)
  })
  .catch((error) => {
    // handle your errors here
    console.error(error)
  })
}

function App() { 
  SearchFunc() 
  return (
    <div className="container">
     <Header />
     <Webtext />
     <Footer/>
    </div>
  );
}
export default App;
