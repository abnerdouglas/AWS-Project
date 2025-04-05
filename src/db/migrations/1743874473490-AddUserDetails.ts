import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserDetails1743874473490 implements MigrationInterface {
    name = 'AddUserDetails1743874473490'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "age" character varying(2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "CPF" character varying(14) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "phone" character varying(15) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "CPF"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "age"`);
    }

}
