const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv/config');

var swaggerJsdoc = require("swagger-jsdoc");
var swaggerUi = require("swagger-ui-express");
var path = require("path");
const { dirname } = require('path');
const swaggerSpecs = require("../back/docs/swagger")
const app = express();
//Connect Database
connectDB();
//Init Middleware
app.use(express.json({extended:false}));
app.use(cors({ origin: process.env.CLIENT_URL, credentials :  true,  
methods: 'GET,PUT,POST,OPTIONS', allowedHeaders: 'Content-Type,Authorization'}));
app.get('/', (req,res)=> res.send('API Running'));
app.use('/api/user', require('./routes/api/user'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/curso', require('./routes/api/curso'))
app.use('/api/conteudo', require('./routes/api/conteudos'))

app.use('/api/trilhas', require('./routes/api/trilhas'))
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
