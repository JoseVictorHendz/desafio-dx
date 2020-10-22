import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '../../errors/AppError';

import User from '../../models/User';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    const userRepository = getRepository(User);

    const checkExist = await userRepository.findOne({ where: { email } });

    if (checkExist) {
      throw new AppError('Email address already used');
    }

    const hashedPassword = await hash(password, 8);

    const newUSer = userRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await userRepository.save(newUSer);

    return newUSer;
  }
}

export default CreateUserService;
