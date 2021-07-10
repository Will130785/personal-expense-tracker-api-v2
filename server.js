// Require packages
const express = require('express')
const path = require('path')

// Set app root
global.APP_ROOT = path.resolve(__dirname)

// Set environment
const { NODE_ENV } = process.env

// Load .env file based on NODE_ENV
const dotEnvPath = NODE_ENV === 'production' ? '.env' : NODE_ENV && `.env.${NODE_ENV}`
require('dotenv').config({
  path: dotEnvPath
})

// App referneced the index.js file in the app folder - it is this that steps through the start up process
const app = require('./app')

// Call the index.js file in the app folder and pass in the express object
app(express())
