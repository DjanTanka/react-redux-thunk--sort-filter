
const initialState = {
  fetchUsers: [], 
  status: 'NO_REQ'
}

const asyncReducer = (state = initialState, action) => {
  
  switch (action.type) {
     
    case "UPDATE_FETCHUSERS" :
    return {
      ...state,
      fetchUsers: [...action.payload],
    }
    
    case "STATUS_SEARCH" :
    return {
      ...state,
      status: 'SEARCHING',
    }  

    case "STATUS_RESOLVE" :
    return {
      ...state,
      status: 'RESOLVE',
    } 
    
    default:
      return state
  }
}

export const updateFetchUsers = (payload) => ({type: 'UPDATE_FETCHUSERS', payload})
export const loadingON = () => ({type: 'STATUS_SEARCH'})
export const loadingOff = () => ({type: 'STATUS_RESOLVE'})

export const getFetchUsers = () => (dispatch) => {
  dispatch(loadingON());
  fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        dispatch(loadingOff())
        dispatch(updateFetchUsers(json));
       })
}


export default asyncReducer