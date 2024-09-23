import React from 'react'

export default function Button(props) {
  return (
    <button style={props.style}>
        {props.title}
    </button>
  )
}
