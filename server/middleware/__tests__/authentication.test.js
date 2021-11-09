require('dotenv').config();
const jwt = require('jsonwebtoken');
const { authenticateToken } = require('../authentication');

test('Verify that authenticateToken returns res.sendStatus(401) when not receiving a token.', () => {
  const req = {};
  const res = {};
  res.sendStatus = jest.fn((status) => status);
  const next = jest.fn();
  
  authenticateToken(req, res, next);
  
  expect(res.sendStatus.mock.results[0].value).toBe(401);
});

test('Verify that authenticateToken returns res.sendStatus(403) when receiving an invalid token.', () => {
  const payload = { email: 'test@somedomain.com' };
  const madeUpsecret = 'randomstring';
  const invalidToken = jwt.sign(payload, madeUpsecret);
  
  const req = {};
  req.headers = {
    authorization: `Bearer ${invalidToken}`
  }
  const res = {};
  res.sendStatus = jest.fn((status) => status);
  const next = jest.fn();

  authenticateToken(req, res, next);
  
  expect(res.sendStatus.mock.results[0].value).toBe(403);
});

test('Verify that authenticateToken passes a valid token, returns req.user with the payload email, and calls next()', async () => {
  const payload = { email: 'test@somedomain.com' };
  const theRealSecret = process.env.ACCESS_TOKEN_SECRET;
  const validToken = jwt.sign(payload, theRealSecret);
  
  const req = {};
  req.headers = {
    authorization: `Bearer ${validToken}`
  }
  req.user = jest.fn((payload) => payload);
  
  const res = {};
  const next = jest.fn();
  
  await authenticateToken(req, res, next);
  
  expect(req.user.email).toEqual(payload.email);
  expect(next).toHaveBeenCalled();
});