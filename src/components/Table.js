import React, { useState } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper  from '@material-ui/core/Paper';
import { useDispatch } from 'react-redux';
import store from "../store/store"


const MyTable = ({users}) => {  

  const dispatch = useDispatch();
  const [direction, setDirection] = useState(false)

  const handleSort = (colomn, dir) => {
    setDirection(!direction)
    dispatch({
      type: 'SORT_FILTER_USERS',
       payload: {
        colomn,
        dir,
        isSort: true,
      }})
    console.log(store.getState())
  }

  const handleUnSort = () => {
    dispatch({type: "UNSORT_UNFILTER_USERS", payload: {isSort: false}})
    console.log(store.getState())
  }

  return (
    <div style={{width: '50vw'}}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>
                Name holder 
                <div 
                  style={{width: "30px", background: 'red', display: 'inline-block'}} 
                  onClick = {() => handleSort('user', direction ? 'desc': 'inc' )}>
                     {direction ? "возр" : "уб"}
                </div>
                <div 
                  style={{width: "15px", background: 'green', display: 'inline-block', marginLeft: '5px' }} 
                  onClick = {handleUnSort}
                >
                  0
                </div>
              </TableCell>
              <TableCell align="right">
                Age 
                <div 
                  style={{width: "30px", background: 'red', display: 'inline-block', marginLeft: '5px'}} 
                  onClick = {() => handleSort('age', direction ? 'desc': 'inc')}>
                    {direction ? "возр" : "уб"}
                </div>
                <div 
                  style={{width: "15px", background: 'green', display: 'inline-block', marginLeft: '5px' }} 
                  onClick = {handleUnSort}
                >
                  0
                </div>
              </TableCell>
              <TableCell align="right">
                sum&nbsp;($) 
                <div 
                  style={{width: "30px", background: 'red', display: 'inline-block'}} 
                  onClick = {() => handleSort('sum', direction ? 'desc': 'inc')}
                >
                   {direction ? "возр" : "уб"}
                </div>
                <div 
                  style={{width: "15px", background: 'green', display: 'inline-block', marginLeft: '5px' }} 
                  onClick = {handleUnSort}
                >
                  0
                </div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.user}
                </TableCell>
                <TableCell align="right">{user.age}</TableCell>
                <TableCell align="right">{user.sum}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>    
    </div>
  )
}

export default MyTable;