const mongoose = require('mongoose');

const IngredientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  amount: { type: String, required: true }  // "2 cups", "500g", etc.
});

const RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: String,
  ingredients: [IngredientSchema],  // Array of ingredient objects
  instructions: [String],  // Array of instruction strings
  prepTime: Number,  // in minutes
  cookTime: Number,
  servings: Number,
  category: {
    type: String,
    enum: ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack'],  // Only these values allowed
    default: 'Dinner'
  },
  tags: [String],  // e.g., ['vegetarian', 'gluten-free']
  imageUrl: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // Links to User model
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Recipe', RecipeSchema);