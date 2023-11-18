import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
import { SignupDto } from './dtos/signup.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signup(dto: SignupDto) {
    const hash = await argon.hash(dto.password);

    const user = await this.prisma.user.create({
      data: {
        ...dto,
        password: hash,
      },
    });

    return user;
  }

  signin() {
    return {
      msg: 'I have signed in',
    };
  }
}
