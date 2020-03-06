import {Document} from 'mongoose'
import {Author} from '../author/author.interface'
 
export interface Article extends Document {
    readonly id?: string;
    readonly title: string;
    readonly content: string;
    description?: string;
    auhtor: Author;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}

