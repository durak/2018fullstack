const initialNotification = {
  content:'here be notifications',
  id: -1
}

const notificationReducer = (state = initialNotification, action) => {
  console.log('state', state)
  switch (action.type) {
    case 'SET_NOTIFICATION':    
      return {
        content:  action.notification,
        id: action.id
      }
    case 'DESTROY_NOTIFICATION':{
      if (state.id===action.id) {
        return null
      } else {
        return state
      }
    }

    default:
      return state
  }
}

export const notificationSet = (notification, id) => {
  return {
    type: 'SET_NOTIFICATION',
    notification,
    id
  }
}

export const notificationDestroy = (id) => {
  return {
    type: 'DESTROY_NOTIFICATION',
    id
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

    dispatch(notificationSet(notification, id))
    setTimeout(() => {
      dispatch(notificationDestroy(id))
    },ms)

  }
}
export default notificationReducer