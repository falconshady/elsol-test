import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('stores')
export class Store {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  city: string;

  @Column()
  address: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
  created_at: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
  updated_at: Date;
}
