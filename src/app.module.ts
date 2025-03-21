import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';

//- định nghĩa một module
@Module({
  imports: [CatsModule],
})
export class AppModule {}
