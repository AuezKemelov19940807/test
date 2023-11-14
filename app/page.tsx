'use client'

import { Provider } from 'react-redux'
import News from '../components/News/News'
import { store } from '../redux/store'
export default function Home() {
  return (
    <Provider store={store}>
      <div className="h-full w-full">
        <News />
      </div>
    </Provider>
  )
}
