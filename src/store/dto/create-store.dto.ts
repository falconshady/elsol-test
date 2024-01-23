import { IsString, IsNotEmpty, MinLength, MaxLength } from "class-validator";
export class CreateStoreDto {
  @IsNotEmpty()
  @IsString()
  name?: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(3)
  city?: string;

  @IsNotEmpty()
  @IsString()
  address?: string;
}
