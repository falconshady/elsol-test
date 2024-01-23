import { PartialType } from '@nestjs/mapped-types';
import { CreateStoreHasProductDto } from './create-store-has-product.dto';

export class UpdateStoreHasProductDto extends PartialType(CreateStoreHasProductDto) {}
