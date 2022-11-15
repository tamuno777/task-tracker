// import React from 'react'
import PropTypes from 'prop-types';
import Button from './button';
const Header = ({title, onAdd}) => {
 
  return (
    <header className='Header'>
        <h1>{title}</h1>
        <Button color='black' text='Add' onClick={onAdd}/>
        
    </header>
  )
}
Header.defaultProps = {
  title:'Task Tracker'
}
Header.propTypes ={
  title:PropTypes.string.isRequired,
}
// const headingH1 = {
//   color:'blue'
// }
export default Header