"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
require("@modules/users/providers");
const CharactersRepository_1 = __importDefault(require("@modules/characters/infra/typeorm/repositories/CharactersRepository"));
const PcClassesRepository_1 = __importDefault(require("@modules/pc-classes/infra/typeorm/repositories/PcClassesRepository"));
const SpellsRepository_1 = __importDefault(require("@modules/spells/infra/typeorm/repositories/SpellsRepository"));
const UsersRespository_1 = __importDefault(require("@modules/users/infra/typeorm/repositories/UsersRespository"));
tsyringe_1.container.registerSingleton('CharactersRepository', CharactersRepository_1.default);
tsyringe_1.container.registerSingleton('PcClassesRepository', PcClassesRepository_1.default);
tsyringe_1.container.registerSingleton('SpellsRepository', SpellsRepository_1.default);
tsyringe_1.container.registerSingleton('UsersRepository', UsersRespository_1.default);
