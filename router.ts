
import cors from 'cors';
import express from 'express';
// const cors = require('cors');


const apiRouter = express.Router()
apiRouter.use(cors())


module.exports = apiRouter
