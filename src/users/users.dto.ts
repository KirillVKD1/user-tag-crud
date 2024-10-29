import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CreateTagRes } from '../tags/tags.dto';

export class CreateUserDto {
  @ApiProperty({
    type: String,
    description: 'User email',
    format: 'email',
  })
  email: string;

  @ApiProperty({
    type: String,
    description: 'User password',
    format: 'password',
  })
  password: string;

  @ApiProperty({
    type: String,
    description: 'User nickname',
    format: 'name',
  })
  nickname: string;
}

export class UpdateUserDto {
  @ApiPropertyOptional({
    type: String,
    description: 'User email',
    format: 'email',
  })
  email?: string;

  @ApiPropertyOptional({
    type: String,
    description: 'User password',
  })
  password?: string;

  @ApiPropertyOptional({
    type: String,
    description: 'User nickname',
  })
  nickname?: string;
}

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

export class UpdateUserResDto {
  @ApiProperty()
  nickname: string;

  @ApiProperty()
  email: string;
}

export class UserResDto {
  @ApiProperty()
  uid: string;

  @ApiProperty()
  nickname: string;

  @ApiProperty()
  email: string;
}

export class CreateUserTagDto {
  @ApiProperty({
    type: [Number],
  })
  tags: number[];
}

export class CreateUserTagResDto {
  @ApiProperty({
    type: [CreateTagRes],
  })
  tags: CreateTagRes[];
}
