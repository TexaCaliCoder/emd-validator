// external dependencies
import express, {Request, Response} from 'express';

// local variables
const app = express();
const PORT = 8080;

// middleware to make sure that we can parse the json
app.use(express.json());

// test to make sure we can hit the server from postman
app.get('/', (req: Request, res: Response)=>{
  res.send( "It's Alllllive!");
});


app.post('/validateCard', (req: Request, res:Response)=>{
console.log(req.body)
const creditCardNumber: string = req.body.creditCardNumber;

if(!creditCardNumber){
  return res.status(400).json({error: 'Please provide a Credit Card Number'})
}
// TODO: Add the validation
return res.status(200).json({msg: 'Success'})
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});