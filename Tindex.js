const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('express-flash');
const session = require('express-session');
const peopleInterested = require('./interests')





const connectionString = process.env.DATABASE_URL || 'postgresql://coder:pg123@localhost:5432/car_pool_db';

const pool = new Pool({
    connectionString,
    ssl: useSSL
  });
  const people = peopleInterested(pool);


  app.get('/interest', async( req, res, next) => {
    // console.log( await people.thumbsUp());
   
    res.render('interest', {
       
     counter: await people.thumbsUp(),
     carcount: await people.carsAvailable()
   }); 
 });

 const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`App started at http://localhost:${PORT}`);

});