import { Module } from '@nestjs/common';
import { InfraModule } from 'src/infra/infra.module';
import { ExampleService } from './example.service';
import { ExampleController } from './example.controller';

@Module({
  imports: [InfraModule],
  providers: [ExampleService],
  controllers: [ExampleController],
})
export class ExampleModule {}
