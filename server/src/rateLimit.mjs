import rateLimit from 'express-rate-limit';
export const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minut
    max: 100, // max 100 požadavků
    message: "Příliš mnoho požadavků, zkuste to za chvíli"
});