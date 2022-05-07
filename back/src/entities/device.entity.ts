import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('devices')
export class DeviceEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 30})
    name: string

    @Column({length: 15})
    ipAddress: string

    @Column({nullable: true})
    password: string

    //meta name of miner
    @Column({default: 'Canaan AvalonMiner A1246', type: 'text'})
    fullName: string

    @Column({type: 'timestamptz', nullable: true})
    lastPaymentDate: string
}
