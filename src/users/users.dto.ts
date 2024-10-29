import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CreateTagRes } from '../tags/tags.dto';

export class GetUserResDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  nickname: string;

  @ApiProperty({
    type: [CreateTagRes],
  })
  tags: CreateTagRes[];
}
