import { Column, Entity,PrimaryGeneratedColumn} from "typeorm";

@Entity({})
export class userEntity{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @Column()
    Age: string;

    @Column()
    Uni: string;
}