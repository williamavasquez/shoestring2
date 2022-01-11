const sequelize = require('../config/connection');
const { User, Bills } = require('../models');

const userData = require('./userData.json');
const billsData = require('./billsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true
  });
  
  try{
    await Bills.bulkCreate(billsData);
  }catch(err){
    console.log(err)
  }

  process.exit(0);
};

seedDatabase();
