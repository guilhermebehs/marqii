import 'dotenv/config';
import path from 'path';
import { DataSource, type DataSourceOptions } from 'typeorm';
import { ExampleEntity } from './entities/example.entity';
import { ExampleChildEntity } from './entities/example-child.entity';

export const dataSourceConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_LOGIN,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [ExampleEntity, ExampleChildEntity],
  ssl: false,
  migrations: [path.join(__dirname, `/migrations/*.{ts,js}`)],
  migrationsTableName: 'migrations',
};
export const dataSource = new DataSource(dataSourceConfig);
