import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { AbstractEntity } from './AbstractEntity';
import { ObjectType, Field } from 'type-graphql';
import { Nationality } from './Nationality';

@Entity()
@ObjectType()
export class Person extends AbstractEntity {
  @Column()
  @Field(() => String)
  firstName: string;

  @Column()
  @Field(() => String)
  lastName: string;

  @Column()
  @Field(() => String)
  address: string;

  @Column()
  @Field(() => String)
  email: string;

  @ManyToOne((type) => Nationality, (nationality) => nationality.persons, {
    nullable: true,
    cascade: true,
  })
  @Field(() => Nationality)
  nationality: Nationality;
}
