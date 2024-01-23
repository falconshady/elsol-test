import { IsString, IsNumber, IsEnum, IsNotEmpty } from "class-validator";
enum ProductType {
  PERECEDERO = 'PERECEDERO',
  NO_PERECEDERO = 'NO_PERECEDERO',
}
export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name?: string;

  @IsNotEmpty()
  @IsNumber()
  price?: number;

  @IsNotEmpty()
  @IsEnum(ProductType)
  type?: string;
}