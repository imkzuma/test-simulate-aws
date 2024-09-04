const env = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Middleware untuk memparsing JSON body
app.use(express.json());
app.use(cors({ origin: env.parsed.FRONTEND_URL }));

// Rute GET /
app.get('/', (req, res) => {
  res.status(200).json({
    data: "Hello World from Express.js! <BACKEND>"
  });
});

// Rute POST /users
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  const user = { name, email };

  // Mengembalikan data user dalam format JSON
  res.status(201).json({
    message: "User created successfully",
    data: user
  });
});

// Menjalankan server di port 4000
const PORT = env.parsed.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
