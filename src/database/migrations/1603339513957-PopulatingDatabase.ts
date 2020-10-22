import { MigrationInterface, QueryRunner } from 'typeorm';
import VideoStore from '../../models/VideoStore';
import Film from '../../models/Film';

export default class PopulatingDatabase1603339513957
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into(VideoStore)
      .values([
        {
          id: '9f3a91ec-ebf4-4d02-9c9e-356729ccdb70',
        },
      ])
      .execute();

    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into(Film)
      .values([
        {
          title: 'Avengers: Endgame',
          director: 'Joe Russo, Anthony Russo',
          amount: 5,
          available_quantity: 5,
          video_store_id: '9f3a91ec-ebf4-4d02-9c9e-356729ccdb70',
        },
        {
          title: 'Eternal Sunshine of the Spotless Mind',
          director: 'Michel Gondry',
          amount: 2,
          available_quantity: 2,
          video_store_id: '9f3a91ec-ebf4-4d02-9c9e-356729ccdb70',
        },
        {
          title: 'Elite Squad',
          director: 'José Padilha',
          amount: 3,
          available_quantity: 3,
          video_store_id: '9f3a91ec-ebf4-4d02-9c9e-356729ccdb70',
        },
        {
          title: 'Joker',
          director: 'Todd Phillips',
          amount: 3,
          available_quantity: 3,
          video_store_id: '9f3a91ec-ebf4-4d02-9c9e-356729ccdb70',
        },
        {
          title: 'Jurassic Park',
          director: 'Steven Spielberg',
          amount: 5,
          available_quantity: 5,
          video_store_id: '9f3a91ec-ebf4-4d02-9c9e-356729ccdb70',
        },
      ])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.clearTable('films');
    await queryRunner.clearTable('video_stores');
  }
}
