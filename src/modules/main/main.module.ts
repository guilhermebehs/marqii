import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InfraModule } from '../../infra/infra.module';
import { ExampleModule } from '../example/example.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, expandVariables: true }),
    ExampleModule,
    InfraModule,
  ],
  controllers: [],
  providers: [],
})
export class MainModule {}
