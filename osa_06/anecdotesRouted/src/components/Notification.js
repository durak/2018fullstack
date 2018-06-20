import React from 'react'

const Notification = (props) => {

  if (!props.notification) return ''

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'lightgrey'
  }

  return (
    <div style={style}>
      {props.notification}
    </div>
  )
}

export default Notification