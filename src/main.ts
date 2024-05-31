import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const DEFAULT_PORT = 7678;
  const parsedPort = parseInt(process.env.PORT);
  const PORT = (
    !isNaN(parsedPort) && parsedPort > 1000
      ? parsedPort
      : DEFAULT_PORT
  );

  await app.listen(PORT);
}
bootstrap();
