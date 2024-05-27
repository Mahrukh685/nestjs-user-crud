import { MigrationInterface, QueryRunner } from "typeorm";

export class Usertable1716840941248 implements MigrationInterface {
    name = 'Usertable1716840941248'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user_entity\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`age\` varchar(255) NOT NULL, \`Uni\` varchar(255) NOT NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`user_entity\``);
    }

}
