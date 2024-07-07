import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { HttpModule } from '@nestjs/axios';
import { HttpProvider } from './http/http.provider';
import { KafkaModule } from './kafka/kafka.module';

@Module({
  imports: [DbModule, HttpModule, KafkaModule],
  providers: [HttpProvider],
  exports: [DbModule, HttpProvider, KafkaModule],
})
export class InfraModule {}
