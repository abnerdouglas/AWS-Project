export class ListUsersDTO {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly email: string,
    readonly age: string,
    readonly cpf: string,
    readonly phone: string,
  ) {}
}
