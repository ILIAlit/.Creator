require('dotenv').config()
const sequelize = require('./data/db')
const express = require('express')
const cors = require('cors')
const models = require('./data/models/models')
const router = require('./routes/index')
const errorHandler = require('./middleware/errorHandlingMiddlewere')
const fileUpload = require('express-fileupload')

PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(fileUpload({ useTempFiles: true }))
app.use('/api', router)

app.use(errorHandler)

const start = async () => {
	try {
		await sequelize.authenticate()
		await sequelize.sync()
		app.listen(PORT, () => console.log('server started'))
	} catch (error) {
		console.log(error)
	}
}

start()
