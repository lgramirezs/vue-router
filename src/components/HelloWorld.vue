<script setup>
import {RouterLink} from 'vue-router';
</script>

<template>
  <div class="greetings">
    <h1 class="green">Consumo de API </h1>
    <h3>
      Api: <a href="https://pokeapi.co/">pokeapi</a>      
    </h3>
    <RouterLink to="/favorites">Mis pokemones favoritos</RouterLink>    
  </div>
</template>

<style scoped>

</style>
