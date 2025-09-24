const request = require('supertest');
const app = require('../app');

describe('Auth Endpoints', () => {
  it('should login with correct credentials', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({ email: 'admin@email.com', password: 'admin123' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });

  it('should fail login with wrong credentials', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({ email: 'wrong@email.com', password: 'wrongpass' });
    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty('error');
  });

  it('should register a new user', async () => {
    const res = await request(app)
      .post('/auth/register')
      .send({ name: 'Novo', email: 'novo@email.com', password: '123456' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('name', 'Novo');
  });
});
