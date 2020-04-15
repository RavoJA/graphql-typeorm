import { InputType, Field } from 'type-graphql';
import { Nationality } from '../entity/Nationality';

@InputType()
export class PersonInput {
  @Field()
  id: number;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  address: string;

  @Field()
  email: string;

  @Field()
  nationalityId: number;
}
