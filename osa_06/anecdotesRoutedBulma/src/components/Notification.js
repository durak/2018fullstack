import React from 'react'

const Notification = (props) => {

  if (!props.notification) return ''

  return (
    <div className="notification is-link">
      {props.notification}
    </div>
  )
}

export default Notification