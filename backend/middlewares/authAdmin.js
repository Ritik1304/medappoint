import jwt from "jsonwebtoken";

const authAdmin = (req, res, next) => {
  try {
    const token = req.headers.atoken || req.headers.authorization?.split(" ")[1]; // support both

    if (!token) {
      return res.json({ success: false, message: "Not Authorized. Login again." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.admin = decoded; // { email }
    next();
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};    

export default authAdmin;
