# Candidate Records Management System

This application is designed to manage candidate records by allowing users to upload data from an Excel file into a MongoDB database via a Node.js backend and a React frontend.

## Features

- **Web Landing Page**: Provides a user interface for uploading Excel files.
- **Excel Upload Option**: Allows users to upload candidate data in Excel format.
- **Success/Error Messaging**: Provides clear messages on successful or failed uploads.
- **Logical Separation of Model & Controller**: Backend architecture maintains clear separation for scalability.
- **Async Processing**: Utilizes `async.eachSeries` for handling candidates' data asynchronously.
- **Duplicate Email Check**: Ensures uniqueness of email IDs in the database.

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js
- **Database**: MongoDB
- *(You can add other dependencies or technologies here as applicable)*

## Installation

1. Clone the repository:

git clone https://github.com/JaiSehgal007/ExcelInflux/


2. Navigate to the backend directory:

cd backend


3. Install backend dependencies:

npm install


4. Navigate to the frontend directory:

cd ../frontend


5. Install frontend dependencies:

npm install


## Configuration

1. Set up MongoDB:

- Ensure MongoDB is installed and running.
- Configure the MongoDB connection settings in `backend/config/database.js`.

2. Environment Variables:

- Create a `.env` file in the `backend` directory and set any necessary environment variables.

## Usage

1. Start the backend server:

cd backend
npm start


2. Start the frontend application:

cd frontend
npm start

3. Access the application in your browser at `http://localhost:3000`.

## API Endpoints

- `/upload`: POST endpoint to handle Excel file uploads.

## Test Data

Use the enclosed Excel file (`test-data.xlsx`) for testing the upload functionality.

## Contributing

Contributions are welcome! Please follow the guidelines in CONTRIBUTING.md.

## License

This project is licensed under the [MIT License](LICENSE).


