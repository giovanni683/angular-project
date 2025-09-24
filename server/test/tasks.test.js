const request = require('supertest');
const app = require('../app');

describe('Tasks Endpoints', () => {
  it('should list tasks', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should create a new task', async () => {
    const res = await request(app)
      .post('/tasks')
      .send({ title: 'Nova Tarefa', description: 'Teste', assignedTo: 'Admin' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('title', 'Nova Tarefa');
  });

  it('should update a task', async () => {
    const res = await request(app)
      .put('/tasks/1')
      .send({ title: 'Atualizada', description: 'Editada', assignedTo: 'User' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', '1');
    expect(res.body).toHaveProperty('title', 'Atualizada');
  });

  it('should delete a task', async () => {
    const res = await request(app).delete('/tasks/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message');
  });
});
