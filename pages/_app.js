import App from 'next/app'
import React from 'react'
import '../styles/globals.css'
import favicon from '../public/favicon.ico'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'

const MyApp = (props) => {
  const { Component, pageProps, reduxStore } = props
  return (
    <Provider store={reduxStore}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default withReduxStore(MyApp)
