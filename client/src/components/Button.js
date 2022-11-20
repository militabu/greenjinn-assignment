import React from 'react'

export const Button = ({ buttonText, buttonClick }) => {
  return (
    <button className='button-component' onClick={buttonClick}>{buttonText}</button>
  )
}
