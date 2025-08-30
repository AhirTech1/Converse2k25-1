import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

import userRoutes from './routes/user.js';
import registerRoutes from './routes/registerRoutes.js';

dotenv.config();

// Use a separate file for database connection logic
import connectToDB from './db.js';

const app = express();

// Security middleware
app.use(helmet());
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// Rate limiting to prevent brute-force attacks
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // max 100 requests per 15 minutes
    standardHeaders: true,
    legacyHeaders: false,
});

app.use('/user', apiLimiter, userRoutes);
app.use('/register', apiLimiter, registerRoutes);

app.get('/', (req, res) => {
    res.send('Hello from uvMart API!');
});

const PORT = process.env.PORT || 5000;

// Centralized database connection function
connectToDB().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
}).catch(err => console.error('❌ Failed to connect to MongoDB and start server:', err));

// db.js (New file)
// import mongoose from 'mongoose';
// async function connectToDB() {
//   try {
//     await mongoose.connect(process.env.CONNECTION_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('✅ MongoDB connected');
//   } catch (err) {
//     console.error('❌ MongoDB connection error:', err);
//     process.exit(1);
//   }
// }
// export default connectToDB;