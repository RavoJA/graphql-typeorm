import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { Nationality } from '../entity/Nationality';

@Resolver()
export class NationalityResolver {
  @Query(() => [Nationality])
  nationality() {
    return Nationality.find();
  }

  @Mutation(() => Nationality)
  async createNationality(@Arg('name') name: string) {
    const nationality = Nationality.create({ name });
    await nationality.save();
    return nationality;
  }

  @Query(() => Nationality)
  nationalityById(@Arg('id') id: string) {
    return Nationality.findOneOrFail({ where: { id } });
  }
}
