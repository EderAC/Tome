"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePcClasses1637457642955 = void 0;
const typeorm_1 = require("typeorm");
class CreatePcClasses1637457642955 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'pcclasses',
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
                    name: 'description',
                    type: 'varchar',
                },
                {
                    name: 'hitDice',
                    type: 'varchar',
                },
                {
                    name: 'primaryAbility',
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
        await queryRunner.dropTable('pcclasses');
    }
}
exports.CreatePcClasses1637457642955 = CreatePcClasses1637457642955;
