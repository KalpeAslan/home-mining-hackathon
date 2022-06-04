import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { UserEntity } from "./user.entity";


export enum WalletType {
  BTC = "btc",
  FIAT = "fiat",
  WEB3 = "web3"
}

@Entity("wallets")
export class WalletEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 42 })
  address: string;

  @Column({ enum: WalletEntity, length: 4 })
  type: WalletType;

  // @Column({ type: "real" })
  // balance: number;

  //format: xx/xx
  @Column({ nullable: true, length: 4 })
  date: string;

  @Column({ nullable: true, type: "varchar" })
  csv: string;

  @ManyToOne(() => UserEntity, userEntity => userEntity.id)
  @JoinColumn()
  userId: UserEntity;

}
