import 'dotenv/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceConfig } from './datasource.config';
import { ExampleRepository } from './repositories/example.repository';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceConfig)],
  providers: [ExampleRepository],
  exports: [TypeOrmModule, ExampleRepository],
})
export class DbModule {}
