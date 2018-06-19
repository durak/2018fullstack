import React from 'react'
import { shallow } from 'enzyme'
import Notification from './Notification'

const store = {
  getState: () => ({ notification: 'content to be rendered' })
}

describe('<Notification />', () => {
  it('renders Notification in store', () => {

    const notificationComponent = shallow(<Notification store={store} />)    
    expect(notificationComponent.text()).toContain(store.getState().notification)
  })
})