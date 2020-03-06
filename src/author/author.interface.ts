import {Document} from 'mongoose'

export  interface Author extends Document{
  readonly id?: string;
  readonly name: string;
  readonly sex: string;
  readonly age: number;
  description?: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}