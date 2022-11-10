const { Sequelize } = require("sequelize");


title: { type: String, required; true }
description: { type: String, required; true }
imageUrl: { type: String, required; true }
userId: { type: String, required; true }
likes: { type: Number}
dislikes: { type: Number }


module.exports = Sequelize.model('Post', PostSchema);