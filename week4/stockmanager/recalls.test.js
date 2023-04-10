const request = require('supertest');
const app = require('./app');
const productsData = require('./data.js');

// Test 1 : Récupérer une liste de tous les ID de produits qui sont rappelés pour une marque
it('GET /recalls/byBrand/:brand', async () => {
    const response = await request(app).get('/recalls/byBrand/Amora');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([1202, 1311, 1490, 1590]); 
    });
    
    // Test 2 : Récupérer une liste de tous les ID de produits rappeléspour une date donnée en timestamp
it('GET /recalls/byTimestamp/:timestamp', async () => {
    const response = await request(app).get('/recalls/byTimestamp/2282956800'); // Timestamp  13 Mai 2024
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([1311]); 
    });
