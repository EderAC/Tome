"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Characters = void 0;
const tsyringe_1 = require("tsyringe");
const apollo_datasource_1 = require("apollo-datasource");
const CreateCharacterService_1 = __importDefault(require("@modules/characters/services/CreateCharacterService"));
const FindAllCharactersService_1 = __importDefault(require("@modules/characters/services/FindAllCharactersService"));
class Characters extends apollo_datasource_1.DataSource {
    async create(name, pcClass, level, race, user_id) {
        const createCharacter = tsyringe_1.container.resolve(CreateCharacterService_1.default);
        const character = await createCharacter.execute({
            name,
            pcClass,
            level,
            race,
            user_id,
        });
        return character;
    }
    async findAll() {
        const findAllCharacters = tsyringe_1.container.resolve(FindAllCharactersService_1.default);
        const characters = await findAllCharacters.execute();
        return characters;
    }
}
exports.Characters = Characters;
