const reducer  = (state, action) => {  
  
  switch (action.type) {
     
    case "UPDATE_USERS" :
      console.info('---UPDATE_USERS')
    return {
      ...state,
      users: [...state.users, ...action.payload],
      sortFilterUsers: [...state.users, ...action.payload]
    }       

    case "SORT_FILTER_USERS" :
      console.info('---SORT_AND_FILTER_USERS')

      const { colomn, dir, valueFilter} = action.payload
      
      const currentValueFilter =  typeof valueFilter === 'undefined' ? state.valueFilter : valueFilter
      const currentColomn =  colomn || state.sortKind
      const currentDir = dir || state.dir

      let filterUsers = [...state.users]

      if (currentValueFilter) {
        const Filter = (arr) => {
          const temp = arr.filter(elem => { 
            const {id, ...user} = elem
            const arrayOfValues =  Object.values(user)
            for (let i = 0; i < arrayOfValues.length; i++) {
              const value = arrayOfValues[i];
              if (value.toString().toUpperCase().includes(currentValueFilter.toUpperCase())) {
                return true
              }
            }
            return false
          })
          return temp
        }

        filterUsers = Filter(filterUsers)
      } 

      let sortUsers = filterUsers
      
      if(currentColomn) {
        const sortByType = (arr) => {
          const dirSort = currentDir === 'desc' ? 1 : -1
          return arr.sort((a, b) => a[currentColomn || state.sortKind] < b[currentColomn || state.sortKind] ? 1 * dirSort : -1 * dirSort);
        } 
        sortUsers = sortByType(sortUsers)
      }

      return {
        ...state, 
        sortFilterUsers: sortUsers,
        sortKind: currentColomn,
        valueFilter: currentValueFilter,
        dir: currentDir  
    }    
    
    case "UNSORT_UNFILTER_USERS" :
      console.info('---UNSORT_UNFILTER_USERS', action.payload) 

      return {
        ...state, 
        sortFilterUsers: [...state.users],
        sortKind:'',
        dir:'desc'
    }  

    default:
      return {...state}
  }
}

export default reducer