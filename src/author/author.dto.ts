import { ObjectType, Field, Int, ID } from 'type-graphql';
import { IsString, IsNotEmpty, IsNumber , IsDate, IsMongoId} from 'class-validator';

@ObjectType()
export class Author {
  @Field(() => ID)
  @IsMongoId()
  readonly id?: string;
  
  @Field()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @Field(() => null)
  @IsString()
  readonly sex: string;

  @Field(() => Int)
  @IsNumber()
  readonly age: number;

  
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