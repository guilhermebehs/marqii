import { Client, ClientKafka, Transport } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

export class KafkaProducer {
  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'example',
        brokers: [`${process.env.KAFKA_HOST}:${process.env.KAFKA_PORT}`],
      },

      consumer: {
        groupId: 'example-consumer',
      },
    },
  })
  client: ClientKafka;

  async produce() {
    await firstValueFrom(this.client.emit('example-topic', { test: 'hello' }));
  }
}
