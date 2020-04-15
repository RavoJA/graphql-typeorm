import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server';
import { MainResolver } from './resolvers/main-resolver';
import { buildSchema } from 'type-graphql';
import { PersonResolver } from './resolvers/Personresolver';
import { NationalityResolver } from './resolvers/NationalityResovler';

(async () => {
  console.log('----------------------');
  const connection = await createConnection();

  const schema = await buildSchema({
    resolvers: [MainResolver, PersonResolver, NationalityResolver],
  });
  const server = new ApolloServer({ schema });

  await server.listen(4020);
  console.log('Server has started!');
})();
