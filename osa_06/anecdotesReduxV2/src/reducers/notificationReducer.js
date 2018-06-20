const initialNotification = 'here be notifications'

const notificationReducer = (state = [], action) => {
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


const idCounter = (
  () => {
    var counter = 0
    return () => counter++
  })()


export const notify = (notification, seconds) => {
  
  return (dispatch) => {
    const id = idCounter()
    console.log(id)
    let ms = seconds ? seconds * 100 : 5000

    dispatch(notificationSet(notification))
    setTimeout(() => {
      dispatch(notificationDestroy())
    },ms)

  }
}
export default notificationReducer