import 'babel-polyfill'
import request from 'supertest'
import app from '../index.js'

describe('send random data', () => {
    test('should respond with a 200 status code', async () => {
        const response = await request(app).post('/serverTest').send({
            data: 'Sending Random Data to test Response'
        })
        expect(response.statusCode).toBe(200)
    })

    test('responds with json', async () => {
        const res = await request(app).get(`/fakeAPItest`).expect('Content-Type', /json/).expect(200)
    })
})
