import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

enum ProductType {
  PERECEDERO = 'PERECEDERO',
  NO_PERECEDERO = 'NO_PERECEDERO',
}

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;
  
  @Column({
    type: 'enum',
    enum: ProductType,
  })
  type: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
  created_at: Date;
  
  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
  updated_at: Date;
}
