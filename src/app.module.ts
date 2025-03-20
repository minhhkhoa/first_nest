import { Module } from '@nestjs/common';
import { CatController } from './cats/cat.controller';
import { CatService } from './cats/cat.service';

//- định nghĩa một module
@Module({
  imports: [],
  controllers: [CatController],
  providers: [CatService],
})
export class AppModule {}
