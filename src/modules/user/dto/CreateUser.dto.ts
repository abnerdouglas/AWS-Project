import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { UniqueEmail } from "../validation/UniqueEmail.validation";

export class CreateUserDTO {
  @IsNotEmpty({ message: "O nome não pode ser vazio" })
  name: string;

  @IsEmail(undefined, { message: "O e-mail informado é inválido" })
  @UniqueEmail({ message: "Já existe um usuário com este e-mail" })
  email: string;

  @IsNotEmpty({ message: "A idade não pode estar vazia" })
  age: string;

  @IsNotEmpty({ message: "O cpf não pode ser vazio" })
  cpf: string;

  @IsNotEmpty({ message: "O telefone não pode ser vazio" })
  phone: string;

  @MinLength(6, { message: "A senha precisa ter pelo menos 6 caracteres" })
  password: string;
}
