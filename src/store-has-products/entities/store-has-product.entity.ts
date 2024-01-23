import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('store_has_products')
export class StoreHasProduct {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  store_id: number;

  @Column()
  product_id: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
  created_at: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
  updated_at: Date;
}
