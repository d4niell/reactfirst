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
<div className="data-testing-place">
<p>below this line will begin my testing of data usage</p>
<tbody>
  <tr>
  <th>Ammattiala</th>
  </tr>
  {data.map((ala, lisaa) => (
    <tr key={ala}>
      <td>ala.ammattiala</td>
      <td>lisaa.linkki</td>
    </tr>
  ))}
</tbody>
</div>
    </div>
  );
}
export default App;
