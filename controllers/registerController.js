const db = require('../config/db')

exports.registerUser = (req, res) => {
  const { fullName, age, gender, church, division, phone, email, specialNeeds } = req.body

  const sql = `INSERT INTO registrations (fullName, age, gender, church, division, phone, email, specialNeeds) 
               VALUES (?, ?, ?, ?, ?, ?, ?, ?)`

  db.query(sql, [fullName, age, gender, church, division, phone, email, specialNeeds], (err, result) => {
    if (err) {
      console.error('❌ SQL Error:', err) // ✅ log error reason
      return res.status(500).json({ message: 'Database Error', error: err.message })
    }
    return res.status(201).json({ message: 'Registration Successful' })
  })
}
