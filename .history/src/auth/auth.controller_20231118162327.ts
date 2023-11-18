import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto, UserResponseDto } from './dtos/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() dto: SignupDto) {
    const createdUser = await this.authService.signup(dto);
    return new UserResponseDto(createdUser);
  }

  @Post('signin')
  signin() {
    return this.authService.signin();
  }
}
