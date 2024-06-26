import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { AdminStrategy } from './admin.strategy';
import { SessionSerializer } from './session.serializer';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    PassportModule.register({ session: true }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, AdminStrategy, SessionSerializer],
})
export class AuthModule {}
