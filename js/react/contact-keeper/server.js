const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const userRoutes = require('./routes/users');
const contactRoutes = require('./routes/contacts');
const authRoutes = require('./routes/auth');

const app = express();

// Initialize middleware
app.use(express.json({ extended: false }));

// Connect database
connectDB();

// Define routes
app.use('/api/users', userRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/auth', authRoutes);

// Serve static assets in production
if (process.env.NODE_ENV === 'prod') {
  // Set static folder, this should be the build folder that React makes for us!
  app.use(express.static('client/build'));

  // For all routes that are none of those defined above, look inside the current dir, then the client dir, then the build dir, and finally serve the index.html file.
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}`);
});
