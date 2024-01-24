import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateStoreHasProductDto {
  @IsNotEmpty()
  @IsNumber()
  product_id?: number;
  
  @IsNotEmpty()
  @IsNumber()
  store_id?: number;
}
