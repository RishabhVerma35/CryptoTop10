# Description
This project is a Node.js application that fetches data from the WazirX API and stores it in a PostgreSQL database. It provides an Express server with an endpoint to retrieve the top 10 ticker records based on the 'last' value.

# Installation
Prerequisites
Node.js (version 14 or higher)
PostgreSQL (version 12 or higher)
## 1. Clone the Repository

`git clone <repository-url>
cd <repository-directory>`

## 2. Install Dependencies
Make sure you have npm installed. 
Run the following command to install the required dependencies:
`npm install`

## 3. Set Up the Database
Create a  database named in postgreSql.
Then Create a table with the following schema:

`CREATE TABLE myTable (
  name VARCHAR PRIMARY KEY,
  last NUMERIC,
  buy NUMERIC,
  sell NUMERIC,
  volume NUMERIC,
  base_unit VARCHAR
);`

### 4. Configure File
Be sure to update the const pool configuration in server.js to match your database settings
`DB_USER=your_UserName
DB_HOST=your_HostName
DB_NAME=your_dataBaseName
DB_PASSWORD=your_password
DB_PORT=5432 (it should be same)`

IMP: Make sure to write the actual values for your_UserName, your_HostName, your_dataBaseName, and your_password (that you create in your postgre)

### 5. Run the Application
Start the server with:
`node ./src/server.js`
The server will be running on http://localhost:5432.

# Usage
Fetching and Storing Data: The server automatically fetches data from the WazirX API and stores it in the database on startup.
Retrieving Data: Access the top 10 records via the /data endpoint.

# Contributing:
Feel free to submit issues, suggest features, or contribute code via pull requests.
