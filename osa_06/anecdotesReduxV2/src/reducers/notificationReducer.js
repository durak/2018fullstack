const initialNotification = 'here be notifications'

const notificationReducer = (state = initialNotification, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.notification
    case 'DESTROY_NOTIFICATION':
      return null
    default:
      return state
  }
}

export const notificationSet = (notification) => {
  return {
    type: 'SET_NOTIFICATION',
    notification
  }
}

export const notificationDestroy = () => {
  return {
    type: 'DESTROY_NOTIFICATION'
  }
}

export default notificationReducer