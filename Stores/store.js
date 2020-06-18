import { combineReducers } from 'redux'
import configureStore from './createStore'
//import rootSaga from 'App/Sagas'
import userReducer from '../Reducers/userReducer'
import booksReducer from '../Reducers/booksReducer'


export default () => {
  const rootReducer = combineReducers({
    user: userReducer,
    books: booksReducer
  })

  return configureStore(rootReducer)
}