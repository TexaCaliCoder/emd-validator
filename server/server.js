// external dependencies
const express = require('express');

// local variables
const app = express();
const PORT = 8080;

// make sure that we can parse the json
app.use(express.json());

// test to make sure we can hit the server from postman
app.get('/', (req, res)=>{
  res.send( "It's Alllllive!");
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});