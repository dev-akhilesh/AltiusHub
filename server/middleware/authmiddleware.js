const jwt = require('jsonwebtoken')
const user = require("../models/User");

const authMiddleware = async (req, res, next) => {
    const token = req.headers['authorization']?.split('')[0];
    if (!token) return
    res.status(401).json({ error: 'No token provided' })
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await user.findById(decoded.id);
        next();

    } catch (error) {
        res.status(401).json({ error: 'Invalid token' })

    }
};

module.export = authMiddleware