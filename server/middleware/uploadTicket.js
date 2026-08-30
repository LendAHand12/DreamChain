import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads/tickets");
  },
  filename: function (req, file, cb) {
    const timestamp = Date.now();
    const random = Math.round(Math.random() * 1e9);
    const extension = file.originalname.substring(file.originalname.lastIndexOf("."));
    cb(null, `${timestamp}-${random}${extension}`);
  },
});

const uploadTicket = multer({
  storage,
  limits: {
    fileSize: 5000000, // maximum file size of 5 MB per file
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png|webp|gif)$/i)) {
      return cb(new Error("Unsupported file format"));
    }
    cb(null, true);
  },
});

export default uploadTicket;
