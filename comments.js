// Create web server to handle comments
// Dependencies: fs, express, body-parser, path
// Export: commentsRouter

// Require dependencies
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Create router
const commentsRouter = express.Router();

// Use body-parser
commentsRouter.use(bodyParser.json());