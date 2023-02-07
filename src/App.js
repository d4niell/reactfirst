import Header from "./Header"
import React, { useEffect, useState } from "react";

import Webtext from './Webtext'
import Footer from './components/footer/footer.js'




function App() { 
 const [showJobs, setShowJobs] = useState()
 const [filterText, setFilterText] = useState('');
  const apiUrl = 'https://gis.vantaa.fi/rest/tyopaikat/v1/kaikki'
  let displayData
  function pullJson() {
    fetch(apiUrl)
    .then(response => response.json())
    .then(responseData => {
      displayData = responseData.map(function(tyopaikat) {
        return (
          <p key={tyopaikat.id}>{tyopaikat.organisaatio}</p>
        )
      })
      //console.log(responseData)
      setShowJobs(displayData)
    })
    // return
  }

useEffect(() => {

pullJson()

}, [])


  return (
    <div className="container">
     <Header />
     <Webtext />
     <h1>testi nurkkaus</h1>
     {showJobs}
     <Footer />
    </div>
  );
}
export default App;
export {showJobs}
