"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const type_graphql_1 = require("type-graphql");
exports.schema = (0, type_graphql_1.buildSchemaSync)({
    resolvers: [`${__dirname}/**/*.{resolver,mutation}.{js,ts}`],
    emitSchemaFile: 'schema.gql',
});
