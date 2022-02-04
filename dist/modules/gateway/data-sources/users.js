"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const tsyringe_1 = require("tsyringe");
const apollo_datasource_1 = require("apollo-datasource");
const CreateUserService_1 = __importDefault(require("@modules/users/services/CreateUserService"));
const FindAllUsersService_1 = __importDefault(require("@modules/users/services/FindAllUsersService"));
const FindUserByName_1 = __importDefault(require("@modules/users/services/FindUserByName"));
class Users extends apollo_datasource_1.DataSource {
    async create(name, password) {
        const createUser = tsyringe_1.container.resolve(CreateUserService_1.default);
        const user = await createUser.execute({
            name,
            password,
        });
        return user;
    }
    async findAll() {
        const findAllUsers = tsyringe_1.container.resolve(FindAllUsersService_1.default);
        const users = await findAllUsers.execute();
        return users;
    }
    async findUserByName(name) {
        const findUserByName = tsyringe_1.container.resolve(FindUserByName_1.default);
        const user = await findUserByName.execute({ name });
        return user;
    }
}
exports.Users = Users;
