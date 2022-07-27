const express = require("express");
const app = express();

// configuration ===============================================================
const port = process.env.PORT || 3000;
require('./database')
require('./database/seeder')

// routes ======================================================================
require("./routes")(app);

// listen (start app with node server.js) ======================================
app.listen(port, () =>
  console.log(`Express server runing on http://127.0.0.1:${port}`)
);
