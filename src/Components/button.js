import PropTypes from 'prop-types'

const Button = ({color, text ,onClick}) => {
  return (
    <button 
    onClick={onClick}
    style={{backgrounColor:color}} className='Btn'>{text}</button>

  )
}
Button.defaultProps = {
  color:'steelblue',
}
Button.PropTypes={
  text:PropTypes.string,
  color:PropTypes.string,
  onClick:PropTypes.func,
}
export default Button