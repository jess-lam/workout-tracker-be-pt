const request = require('supertest');
const db = require('../../database/connection.js');
const auth = require('../../server.js');
const User = require('../models/userModel.js');

describe('User', () => {

  beforeAll(async () => {
    return db.seed.run()
  })

  describe('add()', () => {
    it('should add a new user', async () => {
      const registerRes = await request(auth).post('/api/register').send({
        username: 'Evelyn',
        email: 'egg@gmail.com',
        password: 'password',
      });
      expect(registerRes).toBeTruthy();
      const user = await db('users');
      expect(user).toHaveLength(4);

      const res = await request(auth)
        .post('/api/login')
        .send({ email: 'egg@gmail.com', password: 'password' });
      expect(res).toBeTruthy();

      const token = res.body.token;
      const users = await request(auth)
        .get('/api/users/org')
        .set({ Authorization: token });
      expect(users.status).toBe(200);
    });
  });
});
