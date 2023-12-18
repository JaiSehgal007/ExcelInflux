import Candidate from '../models/Candidate.js';
import xlsx from 'xlsx';
import async from 'async';

export const fileUploadController = async (req, res) => {
  function excelSerialToDate(serial) {
    const MS_PER_DAY = 24 * 60 * 60 * 1000;
    const excelEpoch = Date.UTC(1900, 0, 1);
    const milliseconds = excelEpoch + (serial - 1) * MS_PER_DAY;
    const date = new Date(milliseconds);
    return date.toDateString();
  }

  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const workbook = xlsx.readFile(req.file.path);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(worksheet);

    async.eachSeries(
      data,
      async (row, callback) => {
        try {
          const {
            'Name of the Candidate': name,
            'Email': email,
            'Date of Birth': dateOfBirthString,
            'Work Experience': workExperience,
            'Resume Title': resumeTitle,
            'Mobile No.': mobileNo,
            'Current Location': currentLocation,
            'Postal Address': postalAddress,
            'Current Employer': currentEmployer,
            'Current Designation': currentDesignation,
          } = row;

          const existingCandidate = await Candidate.findOne({ email });

          if (!existingCandidate) {
            const dateOfBirth = excelSerialToDate(dateOfBirthString);

            const newCandidate = new Candidate({
              name,
              email,
              dateOfBirth,
              workExperience,
              resumeTitle,
              mobileNo,
              currentLocation,
              postalAddress,
              currentEmployer,
              currentDesignation,
            });

            await newCandidate.save();
          }
        } catch (error) {
          console.error('Error processing row:', error);
        }
      },
      (err) => {
        if (err) {
          console.error('Error processing file:', err);
          return res.status(500).json({ error: 'Internal server error' });
        }
        return res.status(200).json({ success: 'File processed successfully' });
      }
    );
  } catch (error) {
    console.error('Error processing file:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
