import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { Person } from './entity/Person';

const typeOrmDBConfig: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Mdp@2020',
  database: 'typeormgql',
  synchronize: true,
  logging: false,
  entities: [Person],
};

export { typeOrmDBConfig };
