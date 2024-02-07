<script>
</script>


<template>
    <h1>Recettes de cuisine</h1>
    
    <!-- Formulaire pour ajouter une recette -->
    <form @submit.prevent="addRecipe">
      <label for="name">Nom:</label>
      <input type="text" id="name" v-model="newRecipe.name" required><br>
      <label for="ingredients">Ingrédients:</label>
      <textarea id="ingredients" v-model="newRecipe.ingredients" required></textarea><br>
      <label for="preparation">Préparation:</label>
      <textarea id="preparation" v-model="newRecipe.preparation" required></textarea><br>
      <label for="time">Temps de préparation (min):</label>
      <input type="number" id="time" v-model.number="newRecipe.time" required><br>
      <label for="people">Nombre de personnes:</label>
      <input type="number" id="people" v-model.number="newRecipe.people" required><br>
      <button type="submit">Ajouter recette</button>
    </form>
    
    <hr>
    
    <!-- Liste des recettes -->
    <div v-if="recipes.length === 0">
      Aucune recette pour le moment.
    </div>
    <div v-else>
      <div v-for="recipe in recipes" :key="recipe.id">
        <h2>{{ recipe.name }}</h2>
        <p><strong>Ingrédients:</strong> {{ recipe.ingredients }}</p>
        <p><strong>Préparation:</strong> {{ recipe.preparation }}</p>
        <p><strong>Temps de préparation:</strong> {{ recipe.time }} minutes</p>
        <p><strong>Nombre de personnes:</strong> {{ recipe.people }}</p>
        <button @click="deleteRecipe(recipe.id)">Supprimer</button>
        <hr>
      </div>
    </div>
</template>

<script>
export default {
  name:"App",
  data() {
    return {
      
    }
  }
}
</script>