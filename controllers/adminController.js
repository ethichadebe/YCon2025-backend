const pool = require('../config/db')

exports.getRegistrations = (req, res) => {
  console.log('📥 Admin requested registrations')

  const sql = `SELECT * FROM registrations ORDER BY created_at DESC`

  pool.query(sql, (err, results) => {
    if (err) {
      console.error('❌ SQL Fetch Error:', err.message)
      return res.status(500).json({ message: 'Database Error', error: err.message })
    }
    console.log(`✅ Retrieved ${results.length} registrations`)
    res.status(200).json(results)
  })
}
