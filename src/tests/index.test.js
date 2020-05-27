const request = require('supertest')
const app = require('../server/index')

describe("Test the get method which returns the endpoint object containing the 'countryName' property ", () => {
    test("It should response the GET method", async () => {
        const response = await request(app).get("/getTripInfo");
        expect(response.body).toHaveProperty('countryName');
    });
});
