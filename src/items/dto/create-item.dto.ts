import { ObjectType, Field, Int, ID } from 'type-graphql';
import { IsString, IsNotEmpty, IsNumber , IsDate} from 'class-validator';

@ObjectType()
export class ItemType {
  @Field(() => ID)
  @IsString()
  readonly id?: string;
  @Field()
  @IsString()
  @IsNotEmpty()
  readonly title: string;
  @Field(() => Int)
  @IsNumber()
  readonly price: number;
  @Field()
  @IsString()
  description?: string;
  @Field()
  @IsDate()
  readonly createdAt: Date;
  @Field()
  @IsDate()
  readonly updatedAt: Date;
}