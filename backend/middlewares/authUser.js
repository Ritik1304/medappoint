import jwt from "jsonwebtoken"

const authUser = (req, res, next) => {
    try {
        const token = req.headers.token
        if (!token) {
            return res.json({ success: false, message: "No token provided" })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = decoded.id
        next()
    } catch (error) {
        res.json({ success: false, message: "Unauthorized" })
    }
}

export default authUser
