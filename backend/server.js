import express from 'express';
import Candidate from './models/Candidate.js';
import connectDB from './config/db.js';
import fileUploadRoute from './routes/fileUploadRoute.js'
import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 80;

connectDB();

// adding cors for cross origin requests
app.use(cors());

// Route to upload file
app.use('/',fileUploadRoute);


process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  process.exit(1);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
