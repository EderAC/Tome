"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Character_1 = __importDefault(require("../entities/Character"));
class CharactersRepository {
    constructor() {
        this.ormRepository = (0, typeorm_1.getRepository)(Character_1.default);
    }
    async create({ level, name, pcClass, race, user_id, }) {
        const character = this.ormRepository.create({
            name,
            pcClass,
            level,
            race,
            user_id,
        });
        await this.ormRepository.save(character);
        return character;
    }
    async findAll() {
        const characters = await this.ormRepository.find({
            relations: ['user'],
        });
        return characters;
    }
    async findByName(name, user_id) {
        const characters = await this.ormRepository.findOne({ name, user_id });
        return characters;
    }
}
exports.default = CharactersRepository;
