"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const PcClass_1 = __importDefault(require("@modules/pc-classes/infra/typeorm/entities/PcClass"));
const Spell_1 = __importDefault(require("../entities/Spell"));
class SpellsRepository {
    constructor() {
        this.ormRepository = (0, typeorm_1.getRepository)(Spell_1.default);
        this.ormPcClassRepository = (0, typeorm_1.getRepository)(PcClass_1.default);
    }
    async create({ name, school, level, cast, range, component, duration, material, description, pcClasses, }) {
        const foundPcClasses = await this.ormPcClassRepository.find({
            name: (0, typeorm_1.In)(pcClasses),
        });
        const spell = this.ormRepository.create({
            name,
            school,
            level,
            cast,
            range,
            component,
            duration,
            material,
            description,
            pcClasses: foundPcClasses,
        });
        await this.ormRepository.save(spell);
        return spell;
    }
    async findAll() {
        const spells = await this.ormRepository.find({
            relations: ['pcClasses'],
        });
        return spells;
    }
    async findById(id) {
        const spell = await this.ormRepository.findOne({
            where: { id },
            relations: ['pcClasses'],
        });
        return spell;
    }
    async findSpellsByClassId(classId) {
        const spell = await this.ormRepository
            .createQueryBuilder('spells')
            .innerJoinAndSelect('spells.pcClasses', 'pcClasses')
            .where('pcClasses.id = :classId', { classId })
            .getMany();
        return spell;
    }
}
exports.default = SpellsRepository;
