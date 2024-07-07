import { ApiProperty } from '@nestjs/swagger';

export class ListExampleResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  birth: string;
}
