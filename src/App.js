import Header from "./Header"
import React, { useEffect, useState } from "react";

import Webtext from './Webtext'
import Footer from './components/footer/footer.js'




function App() { 
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?limit=1`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => console.log(actualData))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="container">
     <Header />
     <Webtext />
     <h1>testi nurkkaus</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {data &&
          data.map(({ id, title }) => (
            <li key={id}>
              <h3>{title}</h3>
            </li>
          ))}
      </ul>
     <Footer />
    </div>
  );
}
export default App;
