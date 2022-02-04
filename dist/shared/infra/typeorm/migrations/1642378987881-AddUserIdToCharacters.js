"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserIdToCharacters1642378987881 = void 0;
const typeorm_1 = require("typeorm");
class AddUserIdToCharacters1642378987881 {
    async up(queryRunner) {
        await queryRunner.addColumn('characters', new typeorm_1.TableColumn({
            name: 'user_id',
            type: 'uuid',
            isNullable: true,
        }));
        await queryRunner.createForeignKey('characters', new typeorm_1.TableForeignKey({
            name: 'CharacterUser',
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey('characters', 'CharacterUser');
        await queryRunner.dropColumn('characters', 'user_id');
    }
}
exports.AddUserIdToCharacters1642378987881 = AddUserIdToCharacters1642378987881;
