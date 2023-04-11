const request = require('supertest');
const app = require('./app');
const productsData = require('./data.js');

// Test 1 : Récupérer une liste de tous les ID de produits qui sont rappelés pour une marque
it('GET /recalls/byBrand/:brand', async () => {
    const response = await request(app).get('/recalls/byBrand/Alvalle');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([4800]); 
    });
    
    // Test 2 : Récupérer une liste de tous les ID de produits rappeléspour une date donnée en timestamp
it('GET /recalls/byTimestamp/:timestamp', async () => {
    const timestamp = new Date ("2024-07-25").getTime()
    const response = await request(app).get(`/recalls/byTimestamp/
    ${timestamp}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([2022, 2044]); 
    });
