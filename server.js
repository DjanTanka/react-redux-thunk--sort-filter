const express = require('express'); 
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json())

const mocTable = [
  {
    id: 12345,
    user: 'Jack',
    age: 39,
    sum: 300546
  },
  {
    id: 12346,
    user: 'Max',
    age: 26,
    sum: 146955
  },
  {
    id: 12347,
    age: 26,
    user: 'Ivan',
    sum: 13866
  },
  {
    id: 12348,
    age: 37,
    user: 'Jhon',
    sum: 957230
  },
  {
    id: 12349,
    user: 'Nil',
    age: 16,
    sum: 16500
  }
]

app.get('/getTable', (req, res) => {
  res.send(mocTable )
})

app.listen(8080, () => {
  console.log('port has been started on 8080....')
});