import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Article} from './article.interface'
import { ArticleCreateInput, ArticleUpdateInput } from './article.dto'


@Injectable()
export class ArticleService {
    constructor(@InjectModel('Article') private ArtleModel: Model<Article>) {}

    async create(createArticleDto: ArticleCreateInput): Promise<Article> {
        const inst = new this.ArtleModel(createArticleDto)
        return await inst.save()
    }
}
