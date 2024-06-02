import { Request, Response, NextFunction } from 'express';

function logger(req: Request, res: Response, next: NextFunction) {
    console.log(`${req.method} ${req.path}`);
    next();
}

export default logger;
