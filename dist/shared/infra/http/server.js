"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("module-alias/register");
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const AppError_1 = __importDefault(require("@shared/errors/AppError"));
require("@shared/infra/typeorm");
require("@shared/Container");
const graphql_1 = require("@modules/gateway/graphql");
const data_sources_1 = require("@modules/gateway/data-sources");
async function init() {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use((err, request, response, _) => {
        if (err instanceof AppError_1.default) {
            return response.status(err.statusCode).json({
                status: 'error',
                message: err.message,
            });
        }
        console.log(err);
        return response.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    });
    const server = new apollo_server_express_1.ApolloServer({
        schema: graphql_1.schema,
        dataSources: data_sources_1.createDataSources,
    });
    await server.start();
    server.applyMiddleware({ app });
    app.listen(3333, () => {
        console.log('Server started on port 3333');
    });
}
init();
