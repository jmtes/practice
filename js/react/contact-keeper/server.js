const express = require('express');

const userRoutes = require('./routes/users');
const contactRoutes = require('./routes/contacts');
const authRoutes = require('./routes/auth');

const app = express();

app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to the ContactKeeper API!' })
);

// Define routes
app.use('/api/users', userRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}`);
});
