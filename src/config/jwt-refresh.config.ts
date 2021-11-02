//import { JwtModuleOptions } from '@nestjs/jwt';

const jwtRefreshConfig/* : JwtModuleOptions  */= {
  signOptions: {
    expiresIn: +process.env.AUTH_REFRESH_TOKEN_EXP || 86400,
  },
};

export default jwtRefreshConfig;
