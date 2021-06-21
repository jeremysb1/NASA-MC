const request = require('supertest');
const app = require('../../app');

describe('Test GET /Launches', () => {
  test('It should respond with 200 success', async () => {
  	const response = await request(app)
  	  .get('/launches')
  	  .expect('Content-Type', /json/)
  	  .expect(200);
  });
});

describe('Test POST /Launches', () => {
  test('Should respond with 200 success', () => {
  });

  test('Should catch missing required properties', () => {});
  test('Should catch invalid dates', () => {});
});