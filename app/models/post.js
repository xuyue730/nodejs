const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {type:String,required:true},
  content: {type:String,required:true},
  slug: {type:String,required:true},
  category: {type:Schema.Types.ObjectId,required:true},
  author: {type:Schema.Types.ObjectId,required:true},
  published: {type:Boolean,default:false},
  meta: {type: Schema.Types.Mixed},
  comments: [Schema.Types.Mixed],
  created: {type: Date}
});

mongoose.model('Post', PostSchema);

