import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { articleSchema } from './article.schema'
import {articleResolver} from './article.resolver'
import {articleService} from './article.service'

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Article', schema: articleSchema}])],
    providers: [articleResolver, articleService],
})
export class ArticleModule {}
