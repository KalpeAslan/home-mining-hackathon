import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


export enum WalletType {
    BTC = 'btc',
    FIAT = 'fiat',
    WEB3 = 'web3'
}

@Entity('wallets')
export class WalletEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 42})
    address: string

    @Column({enum: WalletEntity, length: 4})
    type: WalletType

    @Column({type: 'real'})
    balance: number

}
