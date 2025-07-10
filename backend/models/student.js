const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
name: String,
prn: String,
abcId: String,
rollNo: String,
dob: Date,
branch: String,
gender:String,
phone: String,
email: String,
admissionYear: Number,
admissionMode: String,
casteCategory: String,
subCaste: String,
profileImage: String ,// base64 or URL

academicInfo: {
    sgpa1: String,
    sgpa2: String,
    cgpa1: String,
    sgpa3: String,
    sgpa4: String,
    cgpa2: String,
    sgpa5: String,
    sgpa6: String,
    cgpa3: String,
    sgpa7: String,
    sgpa8: String,
    cgpa4: String,
    marksheets: [String] // Array of file paths
  }
}
);


module.exports = mongoose.model('Student', studentSchema)