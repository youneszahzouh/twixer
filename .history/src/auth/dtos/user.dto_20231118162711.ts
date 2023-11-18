import { IsEmail, IsNotEmpty } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';

export class SignupDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  bio: string;

  location: string;

  website: string;

  birthdate: Date;
}

@Exclude()
export class UserResponseDto {
  @Expose()
  readonly id: number;

  @Expose()
  readonly username: string;

  @Exclude()
  readonly name: string;

  // @Expose()
  // readonly email: string;

  // @Expose()
  // readonly bio: string;

  // @Expose()
  // readonly location: string;

  // @Expose()
  // readonly website: string;

  // @Expose()
  // readonly birthdate: Date;

  constructor(partial: Partial<UserResponseDto>) {
    Object.assign(this, partial);
  }
}
