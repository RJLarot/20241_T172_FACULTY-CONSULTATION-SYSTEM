const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // Import CORS
const userRoutes = require('./routes/userRoute');
const availabilityRoutes = require('./routes/availabilityRoute');
const consultationRoutes = require('./routes/consultationRoute');
const notificationRoutes = require('./routes/notificationRoute');
const historyRoutes = require('./routes/historyRoute');

// Load environment variables from .env file
dotenv.config();

const app = express();

// CORS Configuration
const corsOptions = {
  origin: 'http://localhost:3000', // Allow requests from the React frontend
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow specific HTTP methods
  credentials: true, // Allow credentials (if needed)
};

app.use(cors(corsOptions)); // Enable CORS with the specified options

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Failed to connect to MongoDB:', error));

// Route definitions
app.use('/api/users', userRoutes);
app.use('/api/availability', availabilityRoutes);
app.use('/api/consultations', consultationRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/history', historyRoutes);

// Default route to check server status
app.get('/', (req, res) => {
  res.send('Faculty Consultation System API is running');
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
