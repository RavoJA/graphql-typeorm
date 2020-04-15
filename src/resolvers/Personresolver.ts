import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { Person } from '../entity/Person';
import { PersonInput } from '../inputs/PersonInputs';
import { Nationality } from '../entity/Nationality';

@Resolver()
export class PersonResolver {
  @Query(() => [Person])
  persons() {
    return Person.find({ relations: ['nationality'] });
  }

  @Mutation(() => Person)
  async createPerson(@Arg('data') data: PersonInput) {
    const nationalty = await Nationality.findOne({
      where: { id: data.nationalityId },
    });
    const person = Person.create(data);
    person.nationality = nationalty;
    await person.save();
    return person;
  }

  @Query(() => Person)
  person(@Arg('id') id: string) {
    return Person.findOneOrFail({ where: { id } });
  }
}
