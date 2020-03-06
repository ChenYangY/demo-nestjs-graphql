import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleService } from './article/article.service';
import { ArticleResolver } from './article/article.resolver';
import { ArticleModule } from './article/article.module';
import { AuthorService } from './author/author.service';
import { AuthorResolver } from './author/author.resolver';
import { AuthorModule } from './author/author.module';

@Module({
  imports: [GraphQLModule.forRoot({
    debug: false,
    autoSchemaFile: 'schema.gql'
  }),MongooseModule.forRoot('mongodb://localhost/myoffer',{ useNewUrlParser: true , useUnifiedTopology: true}),ItemsModule, ArticleModule, AuthorModule],
  controllers: [AppController],
  providers: [AppService, ArticleService, ArticleResolver, AuthorService, AuthorResolver]
})
export class AppModule {}
