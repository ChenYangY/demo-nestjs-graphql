import { ObjectType, Field, Int, ID } from 'type-graphql';
import { IsString, IsNotEmpty, IsMongoId} from 'class-validator';

@ObjectType()
export class ArticleCreateInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @Field(() => Int)
  @IsString()
  readonly content: string;

  @Field()
  @IsString()
  description?: string;
}

export class ArticleUpdateInput {
    @Field(() => ID)
    @IsMongoId()
    readonly id: string;
    
    @Field()
    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @Field(() => Int)
    @IsString()
    readonly content: string;

    @Field()
    @IsString()
    description?: string;

}