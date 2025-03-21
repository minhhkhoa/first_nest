import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { logger } from './middleware/logger.middleware';

//- định nghĩa một module
@Module({
  imports: [CatsModule],
})
export class AppModule {
  //- sử dụng middleware cho tất cả các route trong module cats
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
      .exclude({ path: 'cats/all', method: RequestMethod.GET }) //- loại trừ route /cats/all
      .forRoutes({ path: 'cats/*', method: RequestMethod.GET }); //- áp dụng middleware cho tất cả các route GET trong module cats/*
  }
}
