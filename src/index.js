import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider as Provider } from 'react-apollo'
import { App } from './App'
import ContextWrapper from './Context'

const client = new ApolloClient({
  uri: 'https://petgram-server-ciro.cvillafraz.now.sh/graphql',
  request: operation => {
    const token = window.sessionStorage.getItem('token')
    const authorization = token ? `Bearer ${token}` : ''
    operation.setContext({
      headers:{
        authorization
      }
    })
  },
  onError: ({networkError}) => {
    if(networkError && networkError.result.code === 'invalid_token'){
      window.sessionStorage.removeItem('token')
      window.location.href = '/'
    }
  }
})
ReactDOM.render(
  <ContextWrapper.Provider>
    <Provider client={client}>
      <App />
    </Provider>
  </ContextWrapper.Provider>,
  document.getElementById('app')
)
