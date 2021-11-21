import { buildSchemaSync } from 'type-graphql';

export const schema = buildSchemaSync({
  resolvers: [`${__dirname}/**/*.{resolver,mutation}.{js,ts}`],
  emitSchemaFile: 'schema.gql',
});
