import rateLimit from 'express-rate-limit';
export const limiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    limit: 100,
    standardHeaders: true,
    legacyHeaders: false,
});