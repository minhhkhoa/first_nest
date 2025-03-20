import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// - tạo một ứng dụng Nest
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000); //- lắng nghe cổng 3000
}
bootstrap();
