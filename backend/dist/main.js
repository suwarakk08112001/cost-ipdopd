import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api/v1');
    app.enableCors({
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
    });
    const port = process.env.PORT ?? 4005;
    await app.listen(port);
    console.log(`🚀 Server is running on: http://localhost:${port}/api/v1`);
}
void bootstrap();
//# sourceMappingURL=main.js.map