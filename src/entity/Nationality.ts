import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { AbstractEntity } from './AbstractEntity';
import { Person } from './Person';
import { ObjectType, Field } from 'type-graphql';

@Entity()
@ObjectType()
export class Nationality extends AbstractEntity {
  @Column()
  @Field(() => String)
  name: string;

  @OneToMany((type) => Person, (persons) => persons.nationality)
  @Field(() => [Person])
  persons: Person[];
}
