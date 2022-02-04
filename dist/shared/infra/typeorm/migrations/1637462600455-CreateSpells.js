"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSpells1637462600455 = void 0;
const typeorm_1 = require("typeorm");
class CreateSpells1637462600455 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'spells',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'school',
                    type: 'varchar',
                },
                {
                    name: 'level',
                    type: 'varchar',
                },
                {
                    name: 'cast',
                    type: 'varchar',
                },
                {
                    name: 'range',
                    type: 'varchar',
                },
                {
                    name: 'component',
                    type: 'varchar',
                },
                {
                    name: 'duration',
                    type: 'varchar',
                },
                {
                    name: 'material',
                    type: 'varchar',
                },
                {
                    name: 'description',
                    type: 'varchar',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()',
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('spells');
    }
}
exports.CreateSpells1637462600455 = CreateSpells1637462600455;
