import { MigrationInterface, QueryRunner } from 'typeorm';

export class Example1720352334268 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE example(
                id serial PRIMARY KEY,
                name varchar not null,
                birth timestamp not null
            )
            `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE example`);
  }
}
