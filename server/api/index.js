const express = require('express')
const router = express.Router()

require('./routes/why')(router)
require('./routes/user')(router)
require('./routes/goal')(router)
require('./routes/how')(router)
require('./routes/what')(router)
require('./routes/reflection')(router)
require('./routes/task')(router)

module.exports = router
