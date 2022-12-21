import PropTypes from 'prop-types'
import * as React from 'react';
import buttonfunc from './components/ButtonFunction'
const Button = ({color,text}) => {
  return <button
   onClick={buttonfunc} 
   className='btn'
    style={{backgroundColor:color}} >
    {text}</button>
    
}

Button.defaultProps = {
    color: 'black',
    text: 'Search'
}
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}
export default Button