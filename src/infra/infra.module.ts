import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { HttpModule } from '@nestjs/axios';
import { HttpProvider } from './http/http.provider';

@Module({
  imports: [DbModule, HttpModule],
  providers: [HttpProvider],
  exports: [DbModule, HttpProvider],
})
export class InfraModule {}
