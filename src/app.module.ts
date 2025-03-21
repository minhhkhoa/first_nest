import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

//- định nghĩa một module
@Module({
  imports: [CatsModule],
})
export class AppModule {
  //- sử dụng middleware cho tất cả các route trong module cats
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'cats/*', method: RequestMethod.GET }); //- áp dụng middleware cho tất cả các route GET trong module cats/*
  }
}
