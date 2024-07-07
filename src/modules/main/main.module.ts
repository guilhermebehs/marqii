import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InfraModule } from '../../infra/infra.module';
import { ExampleModule } from '../example/example.module';
import { KafkaConsumerModule } from '../kafka-consumer/kafka-consumer.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, expandVariables: true }),
    ExampleModule,
    InfraModule,
    KafkaConsumerModule,
  ],
  controllers: [],
  providers: [],
})
export class MainModule {}
