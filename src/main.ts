import { NestFactory } from '@nestjs/core';
import { MainModule } from './modules/main/main.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);

  const config = new DocumentBuilder()
    .setTitle('Marqii')
    .setDescription('Marqii API')
    .setVersion('1.0')
    .build();

  const kafkaBroker = `${process.env.KAFKA_HOST}:${process.env.KAFKA_PORT}`;

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: [kafkaBroker],
      },
    },
  });

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
