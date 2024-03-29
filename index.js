const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('express-flash');
const session = require('express-session');
const peopleInterested = require('./interests')


const app = express();

const { Pool, Client } = require('pg');

let useSSL = false;
let local = process.env.LOCAL || false;
if (process.env.DATABASE_URL && !local) {
  useSSL = true;
}

<<<<<<< HEAD
const connectionString = process.env.DATABASE_URL || 'postgresql://codex:codex123@localhost:5432/car_pool';
=======
const connectionString = process.env.DATABASE_URL || 'postgresql://coder:pg123@localhost:5432/car_pool_db';
>>>>>>> bf4b3bfbee0c063ab77d8c225f669e41d0a10f81

const pool = new Pool({
  connectionString,
  ssl: useSSL
});
const people = peopleInterested(pool)

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

app.use(flash());

//setup template handlebars as the template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

function errorHandler(err, req, res, next) {
  res.status(500);
  res.render('error', { error: err });
}
21



app.get('/', (req, res, next) => {
<<<<<<< HEAD
=======
  res.send('<h2>The home page!!</h2>');
});

app.get('/interest', async( req, res, next) => {
   // console.log( await people.thumbsUp());
  
   res.render('interest', {
app.get('/action_page', (req, res) => {
>>>>>>> bf4b3bfbee0c063ab77d8c225f669e41d0a10f81
  res.render('signup.handlebars')
});

// app.get('/action_page', (req, res) => {
//   res.render('signup.handlebars')

// });

app.get('/interest', async (req, res, next) => {
  console.log(await people.thumbsUp());
  res.render('interest', {

    counter: await people.thumbsUp()
  });
});


app.post('/action_page', async(req, res, next) => {

  try {
<<<<<<< HEAD
    let data = {
      name: req.body.name,
      email: req.body.email,
      usertype: req.body.type,
      phone: req.body.num,
      pick_up: req.body.PickUp,
      destination: req.body.WhereTo,
      time_slot: req.body.Time,
      price: req.body.PriceOptions,
    }
    if(req.body.type == "commuter") {
      res.redirect('/');
    } else {
      res.redirect('/');
    }
    await accountApp.setUserData(data) 

  } 
  catch (error) {
    next(error)
  }

})


=======
    const data ={
      email,
      name,
      num,
      pickUp,
      whereTo,
      time,
      priceOptions,
      Type
      
        } = req.body
      
    counter: await people.thumbsUp(),
    carcount: await people.carsAvailable()
  }); 
});

app.get('/information', (req, res) => {

   
>>>>>>> bf4b3bfbee0c063ab77d8c225f669e41d0a10f81

});



app.use(errorHandler);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`App started at http://localhost:${PORT}`);
});