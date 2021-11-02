// import { JwtModuleOptions } from '@nestjs/jwt';

const jwtConfig/* : JwtModuleOptions */ = {
  secret: process.env.AUTH_SECRET || 'jwt-auth-secret',
  signOptions: {
    expiresIn: +process.env.AUTH_TOKEN_EXP || 300,
  },
};

export default jwtConfig;
