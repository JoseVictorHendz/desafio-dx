import { EntityRepository, Repository, Like } from 'typeorm';
import Film from '../models/Film';

@EntityRepository(Film)
class FilmsRepository extends Repository<Film> {
  public async findByTitle(title: string): Promise<Film[] | null> {
    const findAppointment = await this.find({
      title: Like(`%${title}%`),
    });

    return findAppointment || null;
  }
}

export default FilmsRepository;
