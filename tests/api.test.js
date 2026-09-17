const request = require('supertest');
const app = require('../app');

describe('API RoyalStaySystem', () => {
  describe('GET /api', () => {
    it('should return 404 for undefined base route', async () => {
      const res = await request(app).get('/api');
      expect(res.statusCode).toEqual(404);
    });
  });

  describe('GET /api/clientes', () => {
    it('should return 200 for clientes list', async () => {
      const res = await request(app).get('/api/clientes');
      expect(res.statusCode).toEqual(200);
    });
  });
});
