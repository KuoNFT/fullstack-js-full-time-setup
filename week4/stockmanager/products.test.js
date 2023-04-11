
const request = require('supertest');
const app = require('./app');
const productsData = require('./data.js');


it('GET /products/byId/:Id', async () => {
    const response = await request(app).get('/products/byId/1737');
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
        {
            id: 1311,
            brand: 'Amora',
            name: 'Pickles',
            price: 1.69,
            unitPrice: 8.05,
            unit: 'killogram',
            batches: [
                { id: 1320009622, quantity: 7000, shippingDate: '2042-05-01', expirationDate: '2044-05-01', recall: false },
                { id: 1320009623, quantity: 500, shippingDate: '2042-06-02', expirationDate: '2044-06-02', recall: true },
                { id: 1320009624, quantity: 25000, shippingDate: '2042-06-17', expirationDate: '2044-06-17', recall: false },
                { id: 1320009624, quantity: 6000, shippingDate: '2042-06-19', expirationDate: '2044-06-19', recall: false },
                { id: 1320009624, quantity: 16000, shippingDate: '2042-07-19', expirationDate: '2044-07-19', recall: false },
            ],
        },
        {
            id: 1490,
            brand: 'Amora',
            name: 'Ketchup',
            price: 2.25,
            unitPrice: 3.91,
            unit: 'killogram',
            batches: [
                { id: 1420005607, quantity: 2000, shippingDate: '2042-07-05', expirationDate: '2043-07-05', recall: true },
                { id: 1420005608, quantity: 3000, shippingDate: '2042-07-25', expirationDate: '2043-07-25', recall: true },
                { id: 1420005609, quantity: 2000, shippingDate: '2042-10-02', expirationDate: '2043-10-02', recall: true },
            ],
        },
        {
            id: 1590,
            brand: 'Amora',
            name: 'Barbecue',
            price: 1.95,
            unitPrice: 4.17,
            unit: 'killogram',
            batches: [
                { id: 1520005607, quantity: 2000, shippingDate: '2042-10-01', expirationDate: '2043-10-01', recall: false },
                { id: 1520005608, quantity: 3000, shippingDate: '2042-10-02', expirationDate: '2043-10-02', recall: false },
                { id: 1520005609, quantity: 0, shippingDate: '2042-10-17', expirationDate: '2043-10-17', recall: true },
            ],
        },
        {
            id: 1737,
            brand: 'Amora',
            name: 'Mayonnaise',
            price: 2.85,
            unitPrice: 7.13,
            unit: 'killogram',
            batches: [
                { id: 1370005607, quantity: 5000, shippingDate: '2042-10-05', expirationDate: '2043-10-05', recall: false },
            ],
        },
    ]);
  });

  it('GET /products/byBatchId/:id', async () => {
    const response = await request(app).get('/products/byBatchId/1420005608');
    expect(response.statusCode).toBe(200);
    expect(response.body.product).toEqual({
        id: 1490,
		brand: 'Amora',
		name: 'Ketchup',
		price: 2.25,
		unitPrice: 3.91,
		unit: 'killogram',
		batches: [
			{ id: 1420005607, quantity: 2000, shippingDate: '2042-07-05', expirationDate: '2043-07-05', recall: true },
			{ id: 1420005608, quantity: 3000, shippingDate: '2042-07-25', expirationDate: '2043-07-25', recall: true },
			{ id: 1420005609, quantity: 2000, shippingDate: '2042-10-02', expirationDate: '2043-10-02', recall: true },
		],
    });
  });