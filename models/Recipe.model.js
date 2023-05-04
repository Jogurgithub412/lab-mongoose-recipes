// Requiring Mongoose
const mongoose = require('mongoose');

// Calling 'Schema' method

const Schema = mongoose.Schema;

const recipeSchema = new Schema ({
  title: 
{
type: String,
required: true,
unique: true
},
level:
{
type: String,
enum: ['Easy Peasy','Amateur Chef','UltraPro Chef']
},
ingredients:
{
type: [String],
},
cuisine:
{
type: String, 
},
dishType:
{
type: String,
},
avatar:
{
type: String,
},
image: 
{
type: String,
default: "https://images.media-allrecipes.com/images/75131.jpg"
},
duration:
{
type: Number,
min: 0  
},
creator: 
{
type: String,
},
create: 
{
type: Number,
default: Date.now
},
})


//Creating the model 
const Recipe = mongoose.model('Recipe', recipeSchema);

// Export the Model
module.exports = Recipe;
