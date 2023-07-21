const express = require("express")
const blogsRouter = require("./controllers/blogs")
const app = express()
const cors = require("cors")
const config = require("./utils/config")
const logger = require("./utils/logger")

app.use(cors())
app.use(express.json())
app.use("/api/blogs", blogsRouter)

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})
