import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcryptjs from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createDto: CreateUserDto): Promise<User> {
    const user = await this.getOneByUsername(createDto.username);
    if (user) {
      throw new HttpException(
        'Username is unavailable',
        HttpStatus.BAD_REQUEST,
      );
    }

    const saltOrRounds = 10;
    const password = createDto.password;
    const hash = await bcryptjs.hashSync(password, saltOrRounds);
    createDto.password = hash;

    const result = await this.userRepository.save(createDto);
    return result;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }
  async getOne(id: string): Promise<User> {
    return this.userRepository.findOne({ where: { id: Number(id) } });
  }

  async getOneByUsername(username: string): Promise<User> {
    return this.userRepository.findOne({ where: { username: username } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
