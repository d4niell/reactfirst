import PropTypes from 'prop-types'
import Button from './Button'
import React from 'react';
import Search from './Search'
const Header = ({ title }) => {
    return (
        
        <header className='header'>
            
            <h2>my own website project</h2>
            <h2>I HAD A SEARCH INPUT BACK IN THE DAY</h2>
            <h3>HTML | CSS | REACT | NODE</h3>
        </header>

    )
}


// const HeadingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }
Header.defaultProps = {
    title : "react webpage",
}
Header.propTypes = {
    title : PropTypes.string.isRequired,
}
export default Header   