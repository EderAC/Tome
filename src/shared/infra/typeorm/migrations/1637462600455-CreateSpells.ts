import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateSpells1637462600455 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
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
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('spells');
  }
}
