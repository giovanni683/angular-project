const request = require('supertest');
const app = require('../app');

describe('Comments Endpoints', () => {
  it('should list comments', async () => {
    const res = await request(app).get('/comments');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should add a new comment', async () => {
    const res = await request(app)
      .post('/comments')
      .send({ content: 'Novo comentário', author: 'Admin', taskId: 1 });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('content', 'Novo comentário');
  });
});
