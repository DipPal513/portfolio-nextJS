import React from 'react'

const Weidgs = ({customClass,position}) => {
  return (
    <span className={` ${customClass}`} style={position}></span>
  )
}

export default Weidgs