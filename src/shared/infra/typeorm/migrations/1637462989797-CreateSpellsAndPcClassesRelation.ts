import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateSpellsAndPcClassesRelation1637462989797
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'spells_pcclasses_pcclasses',
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
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('spells_pcclasses_pcclasses');
  }
}
