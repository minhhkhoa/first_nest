// import { Injectable, NestMiddleware } from '@nestjs/common';
// import { Request, Response, NextFunction } from 'express';

// @Injectable() //- đánh dấu class này là một middleware
// export class LoggerMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next: NextFunction) {
//     console.log('Run class middleware...');
//     next();
//   }
// }

//- Middleware function
import { Request, Response, NextFunction } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Run func middleware...`);
  next();
}
