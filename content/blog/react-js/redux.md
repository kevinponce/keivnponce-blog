---
title: My Redux Setup
date: "2021-07-16T22:12:00.121Z"
tags: ["javascript"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
description: Here is how I like to setup my redux in an react app.
---

# First Install:
```
yarn add redux
yard add react-redux
yarn add redux-thunk
yarn add redux-persist
```

# configureStore.jsx
```
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import rootReducer from './reducers'
 
const persistConfig = {
  key: 'root',
  storage,
  whitelist: [ 'user' ]
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
 
export default () => {
  let store = createStore(persistedReducer, applyMiddleware(thunk))
  let persistor = persistStore(store)

  // persistor.purge()

  return { store, persistor }
}

```

# reducers/index.jsx
```
import { combineReducers } from 'redux'
import UserReducer from './userReducer'

const rootReducer = combineReducers({
  UserReducer,
})

export default rootReducer
```

# reducers/userReducer.jsx
```
import { SET_USER } from '../actions';

export default function(state = {}, action){
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
}
```

# actions/index.js
```
export * from './userAction'
```

# actions/userAction.jsx
```
export const SET_USER = 'SET_USER';

export function setUser(user) {
  return {
    type: SET_USER,
    payload: user,
  }
}
```

# components/example.jsx
```
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import App from './app'
import configureStore from '../configureStore'

const { store, persistor } = configureStore()

ReactDOM.render(
  <Provider store={ store }>
    <PersistGate loading={ null } persistor={ persistor }>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
)
```