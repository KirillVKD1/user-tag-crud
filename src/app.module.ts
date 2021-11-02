import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TagsModule } from './tags/tags.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, TagsModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
