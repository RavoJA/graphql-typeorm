import { BaseEntity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, Int, ID } from 'type-graphql';

export abstract class AbstractEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  protected id: number;

  createdAt: Date = new Date();
}
