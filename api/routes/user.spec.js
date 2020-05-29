require('dotenv').config();
const request = require('supertest');
const db = require('../../database/connection');
const auth = require('../../server');
const User = require('../models/userModel');

beforeEach(async () => {
  await db('users').truncate();
});
