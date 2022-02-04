"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSpellsAndPcClassesRelation1637462989797 = void 0;
const typeorm_1 = require("typeorm");
class CreateSpellsAndPcClassesRelation1637462989797 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'spells_pc_classes_pcclasses',
            columns: [
                {
                    name: 'spellsId',
                    type: 'uuid',
                    isPrimary: true,
                },
                {
                    name: 'pcclassesId',
                    type: 'uuid',
                    isPrimary: true,
                },
            ],
            foreignKeys: [
                {
                    columnNames: ['spellsId'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'spells',
                },
                {
                    columnNames: ['pcclassesId'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'pcclasses',
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('spells_pc_classes_pcclasses');
    }
}
exports.CreateSpellsAndPcClassesRelation1637462989797 = CreateSpellsAndPcClassesRelation1637462989797;
