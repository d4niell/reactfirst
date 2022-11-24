import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({ title }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button/>
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