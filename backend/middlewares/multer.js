// import multer from "multer";

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // save files to "uploads" folder
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname); // unique filename
//   },
// });

// const upload = multer({ storage });

// export default upload;

import multer from "multer";

// Empty diskStorage lets multer pass file to req.file without storing locally
const storage = multer.diskStorage({});

const upload = multer({ storage });

export default upload;

