import { Module } from '@nestjs/common';
import { KafkaProducer } from './kafka-producer';

@Module({
  providers: [KafkaProducer],
})
export class KafkaModule {}
