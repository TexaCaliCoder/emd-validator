// External Dependencies
import request from 'supertest';
import express, { Express } from 'express';

// Internal Dependencies
import { app } from '../server';

// Begin server test suite
describe('Server Tests', () =>{
    let server: Express;

    // before we run our tests, we set up an instance of our server for our tests to use
    beforeAll(() => {
        server = express();
        server.use(app);
    })
    it('should respond with 400 for POST /validateCard without credit card number', async () => {
        const response = await request(server).post('/validateCard').send({});
        // Check that the response status is 400 (Bad Request).
        expect(response.status).toBe(400);
        // Check that the response body contains the expected error message.
        expect(response.body).toEqual({ error: 'Please provide a Credit Card Number', isValid: false });
      });

      it('should respond with 400 for POST /validateCard without a valid credit card number', async () => {
        const response = await request(server).post('/validateCard').send({ creditCardNumber: '1234567890123456' });
        // Check that the response status is 400 (Bad Request).
        expect(response.status).toBe(400);
        // Check that the response body contains the expected error message.
        expect(response.body).toEqual({ error: 'Not a valid Credit Card Number', isValid: false });
      });
      
      // Test for the POST /validateCard endpoint with a valid credit card number.
      it('should respond with 200 for POST /validateCard with a valid credit card number', async () => {
        const response = await request(server).post('/validateCard').send({ creditCardNumber: '4556925412281287' });
        // Check that the response status is 200 (OK).
        expect(response.status).toBe(200);
        // Check that the response body contains the expected success message.
        expect(response.body).toEqual({ msg: 'Success, Thats a valid number!', isValid: true});
      });
});
