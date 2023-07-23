const express = require("express")
const logger = require("./utils/logger")
const config = require("./utils/config")
const cors = require("cors")
const mongoose = require("mongoose")
const url = config.MONGODB_URI
const app = express()
const middleware = require("./utils/middleware")
const blogsRouter = require("./controllers/blogs")
logger.info("connecting to", url)

mongoose
  .connect(url)
  .then(() => {
    logger.info("connected to MongoDB")
  })
  .catch((error) => {
    logger.error("error connecting to MongoDB:", error.message)
  })

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)
app.use("/api/blogs", blogsRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
