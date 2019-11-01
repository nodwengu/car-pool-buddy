const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('express-flash');
const session = require('express-session');
const peopleInterested = require('./interests')
const Carlogic = require('./carlogic');


const app = express();
const AccountPage = require('./signup');

const {
  Pool,
  Client
} = require('pg');

let useSSL = false;
let local = process.env.LOCAL || false;
if (process.env.DATABASE_URL && !local) {
  useSSL = true;
}

const connectionString = process.env.DATABASE_URL || 'postgresql://coder:pg123@localhost:5432/car_pool';

const pool = new Pool({
  connectionString,
  ssl: useSSL
});
const people = peopleInterested(pool);
const carlogic = Carlogic(pool);

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

app.use(flash());

//setup template handlebars as the template engine
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

const accountApp = AccountPage(pool);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));
// parse application/json
app.use(bodyParser.json());

function errorHandler(err, req, res, next) {
  res.status(500);
  res.render('error', {
    error: err
  });
}





app.get('/', (req, res, next) => {
  res.send('<h2>The home page!!</h2>');
});

app.get('/action_page', (req, res) => {
  res.render('signup.handlebars')
});

app.get('/interest', async (req, res, next) => {
  console.log(await people.thumbsUp());
  res.render('interest', {

    counter: await people.thumbsUp()
  });
});

app.post('/action_page', async(req, res, next) => {

  try {
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
      
        accountApp.setUserData(data) 
    console.log(await accountApp.getUserData());
    
  } 
  catch (error) {
    next(error)
  }
console.log(req.body);

  // var email = req.body.email
  // var password = req.body.psw
  // var contactNum = req.body.num
  // var pickUpSpot = req.body.PickUp
  // var destination = req.body.whereTo
  // var timeSlots = req.body.Time
  // var price = req.body.PriceOptions
    
  // const data ={
  //   email,
  //   name,
  //   num,
  //   pickUp,
  //   whereTo,
  //   time,
  //   priceOptions,
  //   Type
    
  //     } = req.body
    
  //     accountApp.setUserData(data)
    



})


app.get('/information', (req, res) => {
  res.render('Info');
});

app.post('/information', async(req, res,next) => {
  try {
    await carlogic.addNumber({
      seats: req.body.number,
      reg_number: req.body.seatsNumber,
      user_id: 1
    })
  }
  catch (error) {
    next(error);
  }
});




app.use(errorHandler);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`App started at http://localhost:${PORT}`);
});