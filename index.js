const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe  = require ('./models/Recipe.model');

// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://127.0.0.1:27017/recipe-app';

//Method 1 : Using Async Await

const manageRecipes = async () => {
  try {
    // Connection to the database "recipe-app"
    const dbConnection = await mongoose.connect(MONGODB_URI);
    console.log(`Connected to the database: "${dbConnection.connection.name}"`);

    // Before adding any recipes to the database, let's remove all existing ones
    await Recipe.deleteMany();
    

    // Run your code here, after you have insured that the connection was made
   const newRecipe = {
    title: "Vegan Balinese Curry",
    level: "Easy Peasy",
    ingredients: ["Shallots","Garlic","Ginger","Lemon Juice","Lemongrass","Cashews"
     ,"Bird Eye Chillies","Curry leaves","Sugar","Turmeric powder","Salt","Water","oil","basmati rice","Potato",
     "Green beans","Broccoli","Coconut Milk"],
    Type: "Dinner",
    Cuisine: "Indonesian",
    dishType: "Vegan",
    Image: "https://veganpunks.com/wp-content/uploads/2021/06/Sayur-Kare-1.jpg",
    Duration: 25
  }

  await Recipe.create(newRecipe)

  await Recipe.insertMany(data) 
  
//update

await Recipe.findOneAndUpdate({title:'Rigatoni alla Genovese'},{duration:100});
     console.log(await Recipe.find({title:'Rigatoni alla Genovese'}));

//delete 1
  
await Recipe.deleteOne({title: "Carrot Cake"});
console.log("Delete Sucess")


  mongoose.disconnect()
  } catch (error) {
    console.log(error);
  }
};

manageRecipes();

//Method 2: Using .then() method
//If you want to use this method uncomment the code below:

/* mongoose
  .connect(MONGODB_URI)
  .then((x) => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany();
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
  })
  .catch((error) => {
    console.error('Error connecting to the database', error);
  }); */
