import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobileNo: String,
  dateOfBirth: Date,
  workExperience: String,
  resumeTitle: String,
  currentLocation: String,
  postalAddress: String,
  currentEmployer: String,
  currentDesignation: String,
});

export default mongoose.model('Candidate', candidateSchema);
