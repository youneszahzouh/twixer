import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignupDto } from './dtos';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  signup(dto: SignupDto) {
    return dto;
  }

  signin() {
    return {
      msg: 'I have signed in',
    };
  }
}
