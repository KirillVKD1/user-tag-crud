import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { useSwagger } from './utils/swagger.util';

async function bootstrap() {
  try {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    app.enableCors()
    useSwagger(app)
    await app.listen(3000);
  } catch (err) {
    console.log('Error during app init.', err);
    process.exit(1);
  }
}
bootstrap();
