import Header from "./Header"
import React, { useEffect, useState } from "react";

import Webtext from './Webtext'
import Footer from './components/footer/footer.js'




function App() { 
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`http://gis.vantaa.fi/rest/tyopaikat/v1`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData.products);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

useEffect(() => {
fetchData();
}, []);

  return (
    <div className="container">
     <Header />
     <Webtext />
     <ul>
        {data &&
          data.map(({ id, ammattiala }) => (
            <li key={id}>
              <h3>{ammattiala}</h3>
            </li>
          ))}
      </ul>
     <Footer />
    </div>
  );
}
export default App;
