const { request } = require('express');

const {getPublicWorkouts} = require('./workoutModel');

describe('Workout Function test', () => {
    it('should get public data', () => {
        const data = getPublicWorkouts();
        expect(data).not.toBe(null); //
    });
});