"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spells = void 0;
const tsyringe_1 = require("tsyringe");
const apollo_datasource_1 = require("apollo-datasource");
const CreateSpellService_1 = __importDefault(require("@modules/spells/services/CreateSpellService"));
const FindAllSpellsService_1 = __importDefault(require("@modules/spells/services/FindAllSpellsService"));
const FindSpellByIdService_1 = __importDefault(require("@modules/spells/services/FindSpellByIdService"));
const FindSpellByClassId_1 = __importDefault(require("@modules/spells/services/FindSpellByClassId"));
const FillDBService_1 = __importDefault(require("@modules/spells/services/FillDBService"));
class Spells extends apollo_datasource_1.DataSource {
    async create({ name, school, level, cast, range, component, duration, material, description, pcClasses, }) {
        const createSpell = tsyringe_1.container.resolve(CreateSpellService_1.default);
        const spell = await createSpell.execute({
            name,
            school,
            level,
            cast,
            range,
            component,
            duration,
            material,
            description,
            pcClasses,
        });
        return spell;
    }
    async findAll() {
        const findAllSpells = tsyringe_1.container.resolve(FindAllSpellsService_1.default);
        const spells = await findAllSpells.execute();
        return spells;
    }
    async findById(id) {
        const findSpellById = tsyringe_1.container.resolve(FindSpellByIdService_1.default);
        const spell = await findSpellById.execute(id);
        return spell;
    }
    async findSpellsByClassId(classId) {
        const findSpellsByClassId = tsyringe_1.container.resolve(FindSpellByClassId_1.default);
        const spells = await findSpellsByClassId.execute(classId);
        return spells;
    }
    async fillDb() {
        const fillDB = tsyringe_1.container.resolve(FillDBService_1.default);
        await fillDB.execute();
    }
}
exports.Spells = Spells;
