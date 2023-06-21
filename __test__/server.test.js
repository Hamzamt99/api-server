'use strict'

require('dotenv').config();

const supertest = require('supertest')

const { app } = require('../src/server')

const req = supertest(app)

const { db, Clothes } = require('../src/models/index')

beforeAll(async () => {
    await db.sync();
})
afterAll(async () => {
    await db.drop();
})

describe('Test the Error Handlers', () => {
    it('Bad Route 404', async () => {
        const res = await req.get('/notfound');
        expect(res.status).toEqual(404);
    })
    it('Bad Method 404', async () => {
        const res = await req.post('/person/name');
        expect(res.status).toEqual(404);
    })
})


describe('test the routes', () => {
    it('Create a record using POST', async () => {
        const res = await req.post('/author').send(
            {
                authorName: "Shirt"
            }
        )
        expect(res.status).toBe(201);
    })
    it('Read a list of records using GET', async () => {
        const res = await req.get('/author')
        expect(res.status).toBe(200);
    })
    it('Read a record using GET', async () => {
        const res = await req.get('/author/2')
        expect(res.status).toBe(200);
    })
    it('Update a record using PUT', async () => {
        const res = await req.put('/author/1').send(
            {
                authorName: "Shirt"
            }
        )
        expect(res.status).toBe(201);
    })
    it('Destroy a record using DELETE', async () => {
        const res = await req.delete('/author/2')
        expect(res.status).toBe(204);
    })
})
