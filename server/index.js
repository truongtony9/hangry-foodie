require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
// const massive = require('massive');
// const session = require('express-session');

const app = express();

app.use(json());
app.use(cors());

// massive(process.env.CONNECTION_STRING).then(db => {
//   app.set("db", db);
// });

// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       maxAge: 7 * 24 * 60 * 60 * 1000
//     }
//   })
// );

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`The server is listening at port`);
});
