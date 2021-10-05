import { useDispatch, useSelector } from "react-redux";
import { getFetchUsers } from '../store/reducer/asyncReducer';
import CircularProgress from '@material-ui/core/CircularProgress';


const FetchUsers = () => {
  
  const dispatch = useDispatch()

  const {fetchUsers, status} = useSelector(state => state.asyncReducer)
  
  const handleGetUsers = () => {
    dispatch(getFetchUsers(dispatch))
  }

  return (
    <div>
      <h2>Юзеры с БД: </h2>
       
      {status === "SEARCHING" && <CircularProgress />}
            
      {fetchUsers.map((user) => {
        return(
          <>
            <div> {user.name} </div>
          </>
        )
      })}
      <button onClick={handleGetUsers}> загрузить пользователей </button>
    </div>
  )
}

export default FetchUsers