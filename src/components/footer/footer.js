import React from 'react'

import './footer.css'


const Footer = () => {
   return (
        <div className="footer">
        <div className="col-1">
            <h3>Useful links</h3>
            <a href="#">Services</a>
            <a href="#">About</a>
        </div>


        <div className="col-2">
                <h3>Important</h3>
                <a href="#">write me an email</a>
                <input type="text" placeholder="email address"></input>
                <button>send</button>
                </div>
        </div>
   )
    
}



export default Footer