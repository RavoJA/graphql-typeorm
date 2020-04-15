import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { Person } from '../entity/Person';
import { PersonInput } from '../inputs/PersonInputs';

@Resolver()
export class MainResolver {
  @Query(() => String)
  hello() {
    return 'world';
  }
}
