import jwt from "jsonwebtoken"

// doctor authentication middleware
const authDoctor = (req, res, next) => {
    try {
        const dtoken = req.headers.dtoken
        if (!dtoken) {
            return res.json({ success: false, message: "Not Autherized login again" })
        }

        const token_decoded = jwt.verify(dtoken, process.env.JWT_SECRET)
        req.docId = token_decoded.id
        next()
    } catch (error) {
        res.json({ success: false, message: "Unauthorized" })
    }
}

export default authDoctor
