import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    type: String,
    description: 'User email',
    format: 'email',
  })
  email: string;

  @ApiProperty({
    type: String,
    description: 'User password',
  })
  password: string;
}

export class AuthResDto {
  @ApiProperty()
  token: string;
  @ApiProperty()
  expire: number;
}
