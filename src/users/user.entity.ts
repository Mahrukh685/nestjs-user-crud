import { Column, Entity,PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class userEntity{

    @PrimaryGeneratedColumn()
    Id:number;

    @Column()
    name: string;

    @Column()
    age: string;

    @Column()
    Uni: string;
}