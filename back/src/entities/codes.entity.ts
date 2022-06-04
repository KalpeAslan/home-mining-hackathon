import {Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UserEntity} from "./user.entity";

@Entity('codes')
export class CodesEntity {

    @PrimaryGeneratedColumn()
    id: number

    // @ManyToOne(() => UserEntity, userEntity => userEntity.id)
    // user: UserEntity

    @Column({length: 4})
    code: string

}
