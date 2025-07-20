const mysql = require('mysql2')
require('dotenv').config()

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

// ✅ Confirm DB connection on start
pool.getConnection((err, connection) => {
  if (err) {
    console.error('❌ Database Connection Failed:', err.message)
  } else {
    console.log('✅ MySQL Pool connected successfully ✅')
    connection.release()
  }
})

module.exports = pool
