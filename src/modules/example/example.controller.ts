import { Body, Controller, Get, Post } from '@nestjs/common';
import { ExampleService } from './example.service';
import { CreateExampleRequestDto } from './dtos/create-example-request.dto';
import { ListExampleResponseDto } from './dtos/list-example-response.dto';
import { CreatExampleResponseDto } from './dtos/create-example-response.dto';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';

@Controller('example')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Get()
  @ApiOkResponse({ type: [ListExampleResponseDto] })
  async list(): Promise<ListExampleResponseDto[]> {
    return this.exampleService.list();
  }

  @Post()
  @ApiCreatedResponse({ type: CreatExampleResponseDto })
  async create(
    @Body() dto: CreateExampleRequestDto,
  ): Promise<CreatExampleResponseDto> {
    return this.exampleService.create(dto);
  }
}
