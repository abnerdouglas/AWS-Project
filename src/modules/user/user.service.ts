import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "./user.entity";
import { CreateUserDTO } from "./dto/CreateUser.dto";
import { ListUsersDTO } from "./dto/ListUser.dto";
import { UpdateUserDTO } from "./dto/UpdateUser.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(dataOfUser: CreateUserDTO) {
    const userEntity = new UserEntity();

    Object.assign(userEntity, dataOfUser as unknown as UserEntity);

    return this.userRepository.save(userEntity);
  }

  async listUsers() {
    const usersSaved = await this.userRepository.find();
    const usersList = usersSaved.map(
      (user) => new ListUsersDTO(
        user.id, 
        user.name,
        user.email,
        user.age,
        user.cpf,
        user.phone
      ),
    );
    return usersList;
  }

  async findByEmail(email: string) {
    const normalizedEmail = email.trim().toLowerCase();
  
    const user = await this.userRepository.findOneBy({ email: normalizedEmail });
  
    if (!user) {
      throw new NotFoundException(`Email ${normalizedEmail} não foi encontrado.`);
    }
  
    return user;
  }
  

  async updateUser(id: string, newData: UpdateUserDTO) {
    const user = await this.userRepository.findOneBy({ id });

    if (user === null)
      throw new NotFoundException("O usuário não foi encontrado.");

    Object.assign(user, newData as UserEntity);

    return this.userRepository.save(user);
  }

  async deleteUser(id: string) {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException("O usuário não foi encontrado");
    }

    await this.userRepository.delete(user.id);

    return user;
  }
}
