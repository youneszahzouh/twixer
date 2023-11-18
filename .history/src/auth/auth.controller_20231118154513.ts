import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  signin() {
    return 'SignedIn';
  }

  @Post()
  signup() {
    return 'Signed Up';
  }
}
