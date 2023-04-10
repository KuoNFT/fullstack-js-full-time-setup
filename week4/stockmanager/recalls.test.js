const request = require('supertest');
const app = require('./app');
const productsData = require('./data');

// Test 1 : Récupérer une liste de tous les ID de produits qui sont rappelés pour une marque
it('GET /recalls/byBrand/:brand', async () => {
    const response = await request(app).get('/recalls/byBrand/Amora');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([1202, 1203, 1204]); 
    });
    
    // Test 2 : Récupérer une liste de tous les ID de produits rappeléspour une date donnée en timestamp
it('GET /recalls/byTimestamp/:timestamp', async () => {
    const response = await request(app).get('/recalls/byTimestamp/1705126800'); // Timestamp  13 Mai 2024
    expect(response.status).toBe(200);
    expect(response.body).toEqual([1201, 1203, 1205]); 
    });