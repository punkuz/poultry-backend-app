import express from "express"

const app = express()
const port = 3000

let data = ['sazid', 9, "black"]

//middleware
app.use(express.json());

// get data 
app.get('/', (req, res) => {
  res.status(200).json(data)
})

// update data
app.put('/', (req, res) => {
  //console.log(req.body)
  data.push(req.body.name)
  res.status(200).json(data)
})
// delete data
app.delete('/', (req, res) => {
  //console.log(req.body)
  data.pop()
  res.status(200).json(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
