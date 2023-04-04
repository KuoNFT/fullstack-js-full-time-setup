const request = require('supertest');
const app = require('./app');

const newTrip = { departure: 'Montpellier', arrival: 'Paris' };

it('POST /trips', async () => {
  const res = await request(app).post('/trips').send(newTrip);

  expect(res.statusCode).toBe(200);
  expect(res.body.allTrips).toEqual(expect.arrayContaining([newTrip]));
});

it('GET /trips', async () => {
  const newTrip2 = { departure: 'Paris', arrival: 'Montpellier' };

  await request(app).post('/trips').send(newTrip);
  await request(app).post('/trips').send(newTrip2);
  const res = await request(app).get('/trips');

  expect(res.statusCode).toBe(200);
  expect(res.body.allTrips).toEqual(expect.arrayContaining([newTrip, newTrip2]));
});

it('GET /lastTrip', async () => {
  await request(app).post('/trips').send(newTrip);
  const res = await request(app).get('/lastTrip');

  expect(res.statusCode).toBe(200);
  expect(res.body.lastTrip).toEqual(newTrip);
});

it('DELETE /trips', async () => {
  await request(app).delete('/trips');
  const res = await request(app).post('/trips').send(newTrip);

  expect(res.statusCode).toBe(200);
  expect(res.body.allTrips).toEqual([newTrip]);
});
