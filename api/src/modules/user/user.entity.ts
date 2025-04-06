import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Exclude } from "class-transformer";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("users")
@Entity({ name: "users" })
export class UserEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "name", length: 100, nullable: false })
  name: string;

  @Column({ name: "email", length: 70, nullable: false })
  email: string;

  @Column({ name: "age", length: 2, nullable: false })
  age: string;

  @Column({ name: "CPF", length: 14, nullable: false })
  cpf: string;

  @Column({ name: "phone", length: 15, nullable: false })
  phone: string;

  @Exclude()
  @Column({ name: "password", length: 255, nullable: false })
  password: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: string;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: string;

  @DeleteDateColumn({ name: "deleted_at" })
  deletedAt: string;
}
