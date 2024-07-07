import { ApiProperty } from '@nestjs/swagger';

export class CreateExampleRequestDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  birth: string;
}
