const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();


//============= BUG FIX ANGULAR CORS ANGULAR 8 (SPESIFIK CORS NYA)

var corsOptions = {

  // ini sesuaikan port angular 4200 sesuaikan 
  //origin: "http://localhost:4200"
  // WAJIB PAKAI   "http://localhost:4200"  bukan IP  "http://127.0.0.1:4200" 



  origin: "*"

  // karena

  //Access to XMLHttpRequest at 'http://127.0.0.1:8080/api/pasien' from origin 'http://localhost:4200' 
  //has been blocked by CORS policy: Response to preflight request doesn't pass access control check: 
  // The 'Access-Control-Allow-Origin' header has a value 'http://127.0.0.1:4200' 
  // that is not equal to the supplied origin.

  // untuk backend ini error di cors

  // origin: "http://localhost:8081"
};

//============= BUG FIX ANGULAR CORS ANGULAR 8  (SPESIFIK CORS NYA)


//====== enable cors maksa  "Access-Control-Allow-Origin", "*"
// app.use(function (req, res, next) {
//   //Enabling CORS 
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
//   next();
// });
//====== enable cors maksa "Access-Control-Allow-Origin", "*"


//============= BUG FIX ANGULAR CORS ANGULAR 8  (SPESIFIK CORS NYA)
 app.use(cors(corsOptions));
//============= / BUG FIX ANGULAR CORS ANGULAR 8  (SPESIFIK CORS NYA)


//============= BUG FIX ANGULAR CORS ANGULAR 8  (ALL CORS NYA)

//app.use(cors());

//============= BUG FIX ANGULAR CORS ANGULAR 8  (ALL CORS NYA)


//=============== JGN LUPA F12 DISABLE NETWORK -> CACING

//=============== JGN LUPA F12 DISABLE NETWORK -> CACING


//=============== INCOGNITO BROWSER ANGULAR SERING CACING
//WINDOWS + R
//chrome -incognito
// enter

// atau buka crome
// CTRL+SHIFT+N

// atau buka crome
// CTRL+SHIFT+N
// pada menu pinggir
// new incognito window
//=============== INCOGNITO BROWSER ANGULAR SERING CACING
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


app.get("/", (req, res) => {
  res.json({ message: "Backend OK" });
});

require("./app/routes/pasien.routes")(app);
require("./app/routes/antrian.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
