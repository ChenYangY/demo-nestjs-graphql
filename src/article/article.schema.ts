import * as mongoose from 'mongoose'

const ObjectId = mongoose.Schema.Types.ObjectId
export const Article = new mongoose.Schema({
    title: String,
    content: String,
    description: String,
    author: {
        type: ObjectId,
        ref: 'Author'
    }
  }, {
      timestamps: {
          createdAt: 'createdAt',
          updatedAt: 'updatedAt'
      }
  });