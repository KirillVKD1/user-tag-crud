import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    app.enableCors()
    await app.listen(3000);
  } catch (err) {
    console.log('Error during app init.', err);
    process.exit(1);
  }
}
bootstrap();
