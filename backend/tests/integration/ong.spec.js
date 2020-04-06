const request = require('supertest');
const app = require('../../src/app');

describe('ONG', () => {
    it('it should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({

            name: "Ong para Teste",
            email: "rogerio1597@gmail.com",
            whatsapp: "456789123",
            city: "Rio do Sul",
            uf: "SC"
        });
        console.log(response.body);
    });
});