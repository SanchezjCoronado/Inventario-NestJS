import { PrimaryGeneratedColumn, Column } from "typeorm";

export class ProductEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    descrption:string;

    @Column()
    create_by:string;

    @Column()
    create_dt:Date;

    @Column()
    update_by:string;

    @Column()
    update_dt:Date;
}
