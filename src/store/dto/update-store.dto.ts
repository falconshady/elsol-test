import { PartialType } from '@nestjs/mapped-types';
import { CreateStoreDto } from './create-store.dto';
import { IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class UpdateStoreDto extends PartialType(CreateStoreDto) {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(3)
  city?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  address?: string;
}
