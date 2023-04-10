
const request = require('supertest');
const app = require('./app');
const productsData = require('./data.js');


it('GET /products/byId/:Id', async () => {
    const response = await request(app).get('/products/byId/1202');
    expect(response.statusCode).toBe(200);
    expect(response.body.product).toEqual({
      id: 1202,
      brand: 'Amora',
      name: 'Mustard',
      price: 1.49,
      unitPrice: 5.62,
      unit: 'killogram',
      batches: [
        { id: 1220009508, quantity: 9000, shippingDate: '2042-03-25', expirationDate: '2043-03-25', recall: false },
        { id: 1220009509, quantity: 11000, shippingDate: '2042-04-01', expirationDate: '2043-04-01', recall: false },
        { id: 1220009510, quantity: 11000, shippingDate: '2042-04-12', expirationDate: '2043-04-12', recall: true },
      ],
    });
  });
  
  it('GET /products/byBrand/:brand', async () => {
    const response = await request(app).get('/products/byBrand/Amora');
    expect(response.statusCode).toBe(200);
    expect(response.body.product).toEqual([
      {
        id: 1202,
        brand: 'Amora',
        name: 'Mustard',
        price: 1.49,
        unitPrice: 5.62,
        unit: 'killogram',
        batches: [
          { id: 1220009508, quantity: 9000, shippingDate: '2042-03-25', expirationDate: '2043-03-25', recall: false },
          { id: 1220009509, quantity: 11000, shippingDate: '2042-04-01', expirationDate: '2043-04-01', recall: false },
          { id: 1220009510, quantity: 11000, shippingDate: '2042-04-12', expirationDate: '2043-04-12', recall: true },
        ],
      },
     
    ]);
  });

  it('GET /products/byBatchId/:id', async () => {
    const response = await request(app).get('/products/byBatchId/1220009510');
    expect(response.statusCode).toBe(200);
    expect(response.body.product).toEqual({
      id: 1202,
      brand: 'Amora',
      name: 'Mustard',
      price: 1.49,
      unitPrice: 5.62,
      unit: 'killogram',
      batches: [
        { id: 1220009508, quantity: 9000, shippingDate: '2042-03-25', expirationDate: '2043-03-25', recall: false },
        { id: 1220009509, quantity: 11000, shippingDate: '2042-04-01', expirationDate: '2043-04-01', recall: false },
        { id: 1220009510, quantity: 11000, shippingDate: '2042-04-12', expirationDate: '2043-04-12', recall: true },
      ],
    });
  });