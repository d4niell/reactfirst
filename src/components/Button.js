import PropTypes from 'prop-types'
import buttonfunc from './ButtonFunction'
const Button = ({color,text}) => {

  return  <button
   onClick={buttonfunc} 
   className='btn'
    style={{backgroundColor:color}} >
    {text}</button>
}

Button.defaultProps = {
    color: 'black',
    text: 'button'
}
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}
export default Button