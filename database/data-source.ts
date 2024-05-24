import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456789',
  connectTimeout: 60 * 60 * 1000,
  database: 'users',
  synchronize: false,
  logging: true,
  entities: ['dist/**/*.entity.{js,ts}'],
  migrations: ['dist/migrations/*.js'],
};


const dataSource = new DataSource(dataSourceOptions);

dataSource
    .initialize()
    .then(() => {
        console.log("access swagger at : http://localhost:3000/v1/api");
    })
    .catch((err) => {
        console.error("Error in Data Source initialization", err);
    });

export default dataSource;
