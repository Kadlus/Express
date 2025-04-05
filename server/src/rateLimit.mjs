import rateLimit from 'express-rate-limit';
export const limiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 15 minut
    max: 1000,
    message: "Příliš mnoho požadavků, zkuste to za chvíli"
});