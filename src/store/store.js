import { createStore } from 'redux'
import reducer from './reducer'

const initialState = {
  users: [], 
  sortFilterUsers: [],
  sortKind: '', 
  valueFilter:'',
  dir:'desc'
  
}

const store = createStore(reducer, initialState)

export default store; 