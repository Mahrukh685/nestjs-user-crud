import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { userEntity } from './users/user.entity';
 export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: "localhost",
        port: 3306,
        username: "root",
        password: "123456789",
        connectTimeout: 60 * 60 * 1000,
        database: "user",
        entities: [userEntity],
        synchronize: false,
      });
      return dataSource.initialize();
    },
  },
];

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}