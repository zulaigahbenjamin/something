const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
 // Import bodyParser

const app = express();

// Configure CORS
app.use(cors());
app.use(bodyParser.json()); // Use bodyParser middleware
app.use(express.static('static'));

let products = [];

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/product/:id', (req, res) => {
  const Id = req.params.id;
  const product = products.find(product => product.id === Id); // Use correct variable name 'product'
  if (!product) {
    res.status(404).json({ message: 'Product not found' }); // Change 'products' to 'Product'
  } else {
    res.json(product); // Change 'products' to 'product'
  }
});

// Create MySQL connection
const db = mysql.createConnection({
  host: 'bgkq7axlalh52arwgnvv-mysql.services.clever-cloud.com',
  user: 'u9j898sc5oghrbny',
  password: 'kRlXj9ltbbDgL5JVT21O',
  database: 'bgkq7axlalh52arwgnvv',
});

// Connect MySQL database
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
  startServer(); // Start the server after connecting to the database
});

// Endpoint to get data from the database
app.get('/data', (req, res) => {
  const query = 'SELECT * FROM bgkq7axlalh52arwgnvv'; // Replace 'your_table_name' with the actual table name
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

function startServer() {
  app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
  });
}
