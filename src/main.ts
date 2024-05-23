import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
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
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: false,
      });
      return dataSource.initialize();
    },
  },
];

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
