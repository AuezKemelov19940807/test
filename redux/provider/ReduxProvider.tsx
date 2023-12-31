'use client'
import { Provider } from 'react-redux'
import { store } from '../store'

const ReduxProvider = (props: React.PropsWithChildren) => {
  return <Provider store={store}>{props.children} </Provider>
}

export default ReduxProvider
