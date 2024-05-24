import { Module } from "@nestjs/common";
import { TypeOrmModule } from "typeorm";
import { userEntity } from "./user.entity";

@Module({
    imports:[TypeOrmModule.forfeature([userEntity])]
})

export class usersModule{}
