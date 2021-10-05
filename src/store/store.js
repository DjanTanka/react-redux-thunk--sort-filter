import { createStore, applyMiddleware } from 'redux';
import reducer from '../store/reducer/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// const initialState = {
//   users: [],
//   fetchUsers: {users: [], status: 'NO_REQ'},
//   sortFilterUsers: [],
//   sortKind: '', 
//   valueFilter:'',
//   dir:'desc'
// }

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store; 