import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'


const app = createApp({
    data() {
      return {
        recipes: [],
        newRecipe: {
          name: '',
          ingredients: '',
          preparation: '',
          time: 0,
          people: 0
        }
      };
    },
    methods: {
      addRecipe() {
        if (!this.validateForm()) {
          alert('Veuillez remplir tous les champs.');
          return;
        }
        const id = Date.now();
        this.recipes.push({ id, ...this.newRecipe });
        this.saveRecipesToLocalStorage();
        this.newRecipe = { name: '', ingredients: '', preparation: '', time: 0, people: 0 };
      },
      deleteRecipe(id) {
        this.recipes = this.recipes.filter(recipe => recipe.id !== id);
        this.saveRecipesToLocalStorage();
      },
      saveRecipesToLocalStorage() {
        localStorage.setItem('recipes', JSON.stringify(this.recipes));
      },
      validateForm() {
        return (
          this.newRecipe.name.trim() !== '' &&
          this.newRecipe.ingredients.trim() !== '' &&
          this.newRecipe.preparation.trim() !== '' &&
          this.newRecipe.time > 0 &&
          this.newRecipe.people > 0
        );
      }
    },
    mounted() {
      const savedRecipes = JSON.parse(localStorage.getItem('recipes'));
      if (savedRecipes) {
        this.recipes = savedRecipes;
      }
    }
  });


createApp(App).mount('#app')
