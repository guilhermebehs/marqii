import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class HttpProvider {
  constructor(private readonly httpService: HttpService) {}

  async get() {
    const response = await firstValueFrom(this.httpService.get(''));
    return {
      status: response.status,
      data: response.data,
    };
  }
}
