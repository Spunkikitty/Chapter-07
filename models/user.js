const path = require('path'); 
const { Sequelize } = require('sequelize');
// convert to sequelize
const userSchema = Sequelize.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

userSchema.plugin(uniqueValidator);

module.exports = Sequelize.model('User', userSchema);