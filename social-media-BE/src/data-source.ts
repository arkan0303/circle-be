import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "kanul0",
  database: "circle_app",
  synchronize: true,
  logging: false,
  entities: ["./src/entities/*.ts"],
  migrations: ["./src/migrations/*.ts"],
  subscribers: [],
});
