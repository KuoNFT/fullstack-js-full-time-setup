
const request = require('supertest');
const app = require('./app');




it('Get product by ID - 1202',  () => {
    const item = getProductById(1202)

    expect(item).toEqual({
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

   it('Get brands\' products - Amora)