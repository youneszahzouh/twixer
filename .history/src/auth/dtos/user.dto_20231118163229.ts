import { IsEmail, IsNotEmpty } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class SignupDto {
  @Expose()
  @IsNotEmpty()
  username: string;

  @Expose()
  @IsNotEmpty()
  name: string;

  @Expose()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @Expose()
  bio: string;

  @Expose()
  location: string;

  @Expose()
  website: string;

  @Expose()
  birthdate: Date;
}
