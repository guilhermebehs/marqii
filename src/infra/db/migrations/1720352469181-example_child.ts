import { MigrationInterface, QueryRunner } from 'typeorm';

export class ExampleChild1720352469181 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
         CREATE TABLE example_child(
          id serial primary key,
          name varchar not null,
          example_id bigint not null,
          CONSTRAINT fk_example foreign key (example_id) REFERENCES example(id)
         )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE example_child
        `);
  }
}
