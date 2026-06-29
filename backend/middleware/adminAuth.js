import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
    try {
        const token = req.headers.token;  
        if(!token) {
            return res.json({ success: false, message: "Not authorized" });
        }                  
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({ success: false, message: "Not authorized" });
        }
        next();
        
    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: "Not authorized" });
    }
};

export default adminAuth;                        