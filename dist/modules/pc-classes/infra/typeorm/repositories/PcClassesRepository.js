"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const PcClass_1 = __importDefault(require("../entities/PcClass"));
class PcClassesRepository {
    constructor() {
        this.ormRepository = (0, typeorm_1.getRepository)(PcClass_1.default);
    }
    async create({ name, description, hitDice, primaryAbility, }) {
        const pcClass = this.ormRepository.create({
            name,
            description,
            hitDice,
            primaryAbility,
        });
        await this.ormRepository.save(pcClass);
        return pcClass;
    }
    async findAll() {
        const pcClasses = await this.ormRepository.find();
        return pcClasses;
    }
    async findById(id) {
        const pcClass = await this.ormRepository.findOne({ where: { id } });
        return pcClass;
    }
}
exports.default = PcClassesRepository;
