"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PcClasses = void 0;
const tsyringe_1 = require("tsyringe");
const apollo_datasource_1 = require("apollo-datasource");
const CreatePcClassService_1 = __importDefault(require("@modules/pc-classes/services/CreatePcClassService"));
const FindAllPcClassesService_1 = __importDefault(require("@modules/pc-classes/services/FindAllPcClassesService"));
const FindPcClassByIdService_1 = __importDefault(require("@modules/pc-classes/services/FindPcClassByIdService"));
class PcClasses extends apollo_datasource_1.DataSource {
    async create(name, description, hitDice, primaryAbility) {
        const createPcClass = tsyringe_1.container.resolve(CreatePcClassService_1.default);
        const pcClass = await createPcClass.execute({
            name,
            description,
            hitDice,
            primaryAbility,
        });
        return pcClass;
    }
    async findAll() {
        const findAllPcClasses = tsyringe_1.container.resolve(FindAllPcClassesService_1.default);
        const pcClasses = await findAllPcClasses.execute();
        return pcClasses;
    }
    async findById(id) {
        const findPcClassById = tsyringe_1.container.resolve(FindPcClassByIdService_1.default);
        const pcClass = await findPcClassById.execute(id);
        return pcClass;
    }
}
exports.PcClasses = PcClasses;
