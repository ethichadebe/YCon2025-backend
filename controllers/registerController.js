const pool = require('../config/db')

exports.registerUser = (req, res) => {
  const { fullName, age, gender, church, division, phone, email, specialNeeds } = req.body

  console.log('📥 Received registration:', req.body)

  const sql = `INSERT INTO registrations (fullName, age, gender, church, division, phone, email, specialNeeds) 
               VALUES (?, ?, ?, ?, ?, ?, ?, ?)`

  pool.query(sql, [fullName, age, gender, church, division, phone, email, specialNeeds], (err, result) => {
    if (err) {
      console.error('❌ SQL Insert Error:', err.message)
      return res.status(500).json({ message: 'Database Error', error: err.message })
    }
    console.log('✅ Registration saved with ID:', result.insertId)
    return res.status(201).json({ message: 'Registration Successful', id: result.insertId })
  })
}
