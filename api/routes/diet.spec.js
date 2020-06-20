require("dotenv").config();
const request = require('supertest');
const db = require('../../database/connection.js');
const auth = require('../../server.js');
const Diet = require('../models/dietModel.js');


describe('Diet', () => {

    beforeAll(async () => {
        return db.seed.run()
    })

    describe('add a diet entry', () => {
      it('should add a new food entry', async () => {
        const dietRes = await request(auth).post('/api/diets').send([{
            user_id: 1,
            meal_date: '2020-06-10',
            meal_time: '2:00 pm',
            meal_category: 'Lunch',
            food_name: 'Ribeye Steak, grilled',
            food_quantity: 6,
            food_measure: 'ounces',
            food_calories: 370,
            food_fat: 33,
            food_protein: 18,
            food_carbs: 0,
            food_fiber: 0
        }]);
        expect(dietRes).toBeTruthy()
        })

      it('should return success (200)', async () => {
        const res = await request(auth)
        .post('/api/login')
        .send({ email: 'egg@gmail.com', password: 'password' })

        const token = res.body.token
        console.log("token", token)
        const diets = await request(auth)
            .get('/api/diets')
            .set({ Authorization: token })
            expect(diets.status).toBe(200)
      })
    })
})