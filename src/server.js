import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';
import pkg from 'pg';
const { Pool } = pkg;

const app = express();
const port = 5432;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'world',
    password: 'putYourDataBasePasswordHere',
    port: 3000,
  });

// Fetch data from API and storing in the database
const fetchDataAndStore = async () => {
  try {
    const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
    const data = response.data;

    // Iterate over all the entries in the data object
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const item = data[key];
        const { name, last, buy, sell, volume, base_unit } = item;
        await pool.query(
          'INSERT INTO ticker_data (name, last, buy, sell, volume, base_unit) VALUES ($1, $2, $3, $4, $5, $6) ON CONFLICT (name) DO NOTHING',
          [name, last, buy, sell, volume, base_unit]
        );
      }
    }
  } catch (error) {
    console.error('Error fetching and storing data:', error);
  }
  };

  //sending data back to frontend
app.get('/data', async (req, res) => {
    try {
      // Fetch top 10 records based on the 'last' value, sorted in descending order
      const result = await pool.query(
        'SELECT * FROM ticker_data ORDER BY last DESC LIMIT 10'
      );
     
      res.json(result.rows); // Send the fetched data as JSON response
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).send('Internal Server Error');
    }
});

app.use(express.static(path.join(__dirname, '../build')));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(port,()=>{
  console.log("Server is runing");
  fetchDataAndStore();
})
