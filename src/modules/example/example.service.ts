import { BadRequestException, Injectable } from '@nestjs/common';
import { ExampleRepository } from 'src/infra/db/repositories/example.repository';
import { ListExampleResponseDto } from './dtos/list-example-response.dto';
import { CreateExampleRequestDto } from './dtos/create-example-request.dto';
import { CreatExampleResponseDto } from './dtos/create-example-response.dto';

@Injectable()
export class ExampleService {
  constructor(private readonly exampleRepository: ExampleRepository) {}

  async list(): Promise<ListExampleResponseDto[]> {
    return this.exampleRepository.find();
  }
  async create(
    createDto: CreateExampleRequestDto,
  ): Promise<CreatExampleResponseDto> {
    if (!createDto.name) throw new BadRequestException('"name" is required');
    if (!createDto.birth) throw new BadRequestException('"birth" is required');

    const result = await this.exampleRepository.save({
      name: createDto.name,
      birth: createDto.birth,
    });

    return { id: result.id };
  }
}
