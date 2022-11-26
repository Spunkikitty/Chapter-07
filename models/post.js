const { Model } = require("Sequelize");

// Sequelize.define(
//   "Post",
//   {
//     // ... (attributes)
//   },
//   {
//     freezeTableName: true,
//   }
// );

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      // define association here
    }
  }
  Post.init(
    {
   
     message: DataTypes.STRING,
     userId: DataTypes.STRING,
     imageUrl:DataTypes.STRING,
      readBy: DataTypes.JSON
    },

    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};

//const { Sequelize } = require("sequelize");

 //const PostSchema = Sequelize.DataTypes.Schema;
//  title: {
//    type: String, required, true;
//  }
//  description: {
//    type: String, required, true;
//  }
//  imageUrl: {
//    type: String, required, true;
//  }
//  userId: {
//    type: String, required, true;
//  }
 
//  readBy: {
//    type: Number;
//  }
//module.exports = Sequelize.model("Post", PostSchema);
