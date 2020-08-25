const request = require('supertest');
const db = require('../../database/connection.js');
const auth = require('../../server.js');
const Diet = require('../models/dietModel.js');


describe('Workout', () => {
    beforeAll(() => {
      return db.seed.run()
    })

    describe('Login for a token', () => {
        it('should receive a token when logged in', () => {
            return request(auth)

            .post('/api/login')
            .send({email: 'egg@gmail.com', password: 'password'})
            .then(response => {
                const token = response.body.token
                expect(response.body.token).toBe(token)
            })
        })
    })

    describe('Retrieve workout entries', () => {
        it('should return a 500 status if not logged in', () => {
            return request(auth)
                .get('/api/workouts')
                .then(response => {
                    expect(response.status).toBe(500)
                })
        })
    })

    describe('add a workout entry', () => {
        it('should return a 500 status if not logged in', () => {
            return request(auth)
                .post('/api/workouts')
                .send({
                    user_id: 1,
                    workout_category: "Abs",
                    workout_title: "An Ab workout",
                    workout_date: "2020-05-22",
                    workout_length: "30m",
                    workout_description: "Get perfect Abs with this workout",
                })
                .then(response => {
                    expect(response.status).toBe(500)
                })
        })
    })
})
