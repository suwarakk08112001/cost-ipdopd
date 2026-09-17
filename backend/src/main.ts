import 'dotenv/config'; // ต้องอยู่บรรทัดแรกสุด ก่อน import อื่นๆ ที่อ่าน process.env
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
// import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     transform: true,        // ← ต้องมีบรรทัดนี้
  //     whitelist: true,
  //     transformOptions: {
  //       enableImplicitConversion: true, // ช่วยเรื่อง query string → number ด้วย
  //     },
  //   }),
  // );

  app.enableCors({
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  const port = process.env.PORT ?? 4005;
  await app.listen(port);

  console.log(`🚀 Server is running on: http://localhost:${port}/api/v1`);
}
void bootstrap();
