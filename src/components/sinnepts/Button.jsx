import React from 'react'

function Button(props) {
  return (
    <>
      <button className={`button button-two  ${props?.className}`}>
        {props.text}        
      </button>
    </>
  )
}

export default Button