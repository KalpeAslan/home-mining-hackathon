import {Column, Entity, OneToMany, PrimaryGeneratedColumn, JoinTable} from "typeorm";
import {DeviceEntity} from "./device.entity";
import {WalletEntity} from "./wallet.entity";

export enum UserRoles {
    ADMIN = 'admin',
    USER = 'user'
}

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 5, default: UserRoles.USER, enum: UserRoles})
    role: UserRoles

    @Column({length: 321, type: 'varchar'})
    email: string

    @Column({length: 32})
    password: string

    @Column({length: 4})
    pin: string


    @Column({type: 'boolean', default: false, nullable: true})
    isApproved: boolean

    @OneToMany(() => DeviceEntity, deviceEntity => deviceEntity.id)
    @JoinTable()
    devices: DeviceEntity[]

    @OneToMany(() => WalletEntity, walletEntity => walletEntity.id)
    @JoinTable()
    wallets: WalletEntity[]

    @Column({length: 64, nullable: true})
    refreshToken: string

    @Column({length: 64, nullable: true})
    authToken: string

    @Column({nullable: true})
    binanceUid: string

    @Column({nullable: true})
    name: string

    @Column({nullable: true})
    surname: string

    @Column({nullable: true})
    iin: string

    @Column({nullable: true, type: "timestamptz"})
    birthDate: string

    @Column({length: 15, nullable: true})
    phone: string

}
