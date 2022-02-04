"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = __importDefault(require("../entities/User"));
class UsersRepository {
    constructor() {
        this.ormRepository = (0, typeorm_1.getRepository)(User_1.default);
    }
    async create({ name, password }) {
        const user = this.ormRepository.create({ name, password });
        await this.ormRepository.save(user);
        return user;
    }
    async findAll() {
        const users = await this.ormRepository.find();
        return users;
    }
    async findByName(name) {
        const user = await this.ormRepository.findOne({ where: { name } });
        return user;
    }
}
exports.default = UsersRepository;
