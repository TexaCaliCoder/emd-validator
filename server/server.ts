// external dependencies
import express, {Request, Response} from 'express';
import cors from 'cors';

// local variables
const app = express();
const PORT =  process.env.NODE_ENV === 'test' ? 8081 : 8080;

// middleware to make sure that we can parse the json
app.use(express.json());

// middleware to allow cors access
app.use(cors({
  origin: 'http://localhost:3000', // only allow for our validation app
  methods: 'GET, POST',
}));

// test to make sure we can hit the server from postman
app.get('/', (req: Request, res: Response)=>{
  res.send( "It's Alllllive!");
});


app.post('/validateCard', (req: Request, res:Response)=>{
const creditCardNumber: string = req.body.creditCardNumber;

if(!creditCardNumber){
  return res.status(400).json({error: 'Please provide a Credit Card Number', isValid: false})
}
if(!isValidLuhn(creditCardNumber)){
  return res.status(400).json({error: 'Not a valid Credit Card Number', isValid: false})
}

return res.status(200).json({msg: 'Success, Thats a valid number!', isValid: true})
});


const isValidLuhn = (number:string):boolean => {
  // here we convert the number to an array of numbers for enumeration
  const digits: number[] = number.split('').map((num)=> parseInt(num, 10))

  // set variables outside the scope of the loop to persist 
  let sum = 0;
  let shouldDoubleDigit = false;

  // we start are loop at the end "check digit" and work backwards.
  for (let i = digits.length - 1; i>=0; i --) {
    let digit = digits[i];

    //  if we should double the digit we do so. 
    if(shouldDoubleDigit) {
      digit *= 2
      // based on Luhn's alg, if the digit is greater than 9 we need to subtract 9 
      if(digit >  9){
        digit -= 9;
      }
    }
    // add the our current working digit or difference to our sum. 
    sum += digit;
    // if we doubled the last digit we don't want to double the next. 
    shouldDoubleDigit = !shouldDoubleDigit
  }
  // based on Luhn the sum should be divisible by 10 to be considered valid. 
  return sum % 10 === 0; 
}


if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

// export for testing. 
export { app };