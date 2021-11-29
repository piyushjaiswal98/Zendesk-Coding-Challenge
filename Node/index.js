const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

// Init express
const app = express();


// Middleware
// TODO : Disable CORS in production
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Base64 Encoder
// let data = 'email:address:password';
// let buff = new Buffer.from(data);
// let base64data = buff.toString('base64');

// console.log('"' + data + '" converted to Base64 is "' + base64data + '"');


// Register API routes
app.use("/api/fetch", require("./Routes/Fetch"));


// Define port
// const hostname = '127.0.0.1';
const port = process.env.PORT || 2000;

module.exports = app.listen(port, () => {
     console.log(`Server started on port ${port}`);
});
