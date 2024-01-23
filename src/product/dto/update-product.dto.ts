import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";

enum ProductType {
  PERECEDERO = 'PERECEDERO',
  NO_PERECEDERO = 'NO_PERECEDERO',
}

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNumber()
  price?: number;

  @IsOptional()
  @IsEnum(ProductType)
  type?: string;
}
