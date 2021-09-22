import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import store from "../store/store"

const Filter = () => {
  
  const valueFilter = useSelector((state) => state.valueFilter)

  const dispatch = useDispatch()
  const [userName, setUserName] = useState('')

  const handleUserName = (e) => {
    setUserName(e.target.value)
  }

  const handleFilter = () => {
    if(userName !== valueFilter){
       dispatch({type: 'SORT_FILTER_USERS', 
        payload: {
          valueFilter: userName
        }})
      console.log(store.getState())
    }  
  }

  const handleUnFilter = () => {
    dispatch({type: 'SORT_FILTER_USERS', payload: {valueFilter: '' }})
    setUserName('')
    console.log(store.getState())
  }

  return(
    <div style={{margin: '20px'}}>
      <label>
         Найти по имени:
        <input value={userName} onChange={(e) => handleUserName(e)}/>
      </label>
      <button 
        style={{margin: '20px'}}
        onClick={handleFilter}
      >
          Найти
      </button>
      <button 
        style={{margin: '20px'}} onClick={handleUnFilter}
      >
        Сбросить
      </button>
        
    </div>
  )

  
}
export default Filter