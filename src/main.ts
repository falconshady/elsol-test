import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const port = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    transformOptions: {
      enableImplicitConversion: true,
    },
    forbidUnknownValues: false,
  }));
  app.enableCors();
  await app.listen(port, "0.0.0.0");
}
bootstrap();
