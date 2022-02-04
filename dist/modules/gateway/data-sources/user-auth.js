"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuth = void 0;
const tsyringe_1 = require("tsyringe");
const apollo_datasource_1 = require("apollo-datasource");
const AuthenticateUserService_1 = __importDefault(require("@modules/users/services/AuthenticateUserService"));
class UserAuth extends apollo_datasource_1.DataSource {
    async authenticateUser(name, password) {
        const authUser = tsyringe_1.container.resolve(AuthenticateUserService_1.default);
        const authenticatedUser = await authUser.execute({
            name,
            password,
        });
        return authenticatedUser;
    }
}
exports.UserAuth = UserAuth;
