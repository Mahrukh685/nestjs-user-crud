import { Column, Entity,PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class userEntity{

    @PrimaryGeneratedColumn()
    Id:number;

    @Column()
    Name: string;

    @Column()
    Age: string;

    @Column()
    Uni: string;
}