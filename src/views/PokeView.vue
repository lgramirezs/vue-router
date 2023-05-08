<script setup>
// import axios from 'axios';
// import {ref} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {useGetData} from '@/composables/getData';

const { getData, data ,loading } = useGetData()

const route = useRoute();
const router = useRouter();

const returnBack = () => {
    router.push('/');
} 

// const getpokemon = async() => {
//     try {
//         const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.pokename}`)
//         pokemon.value = data;
//     } catch (error) {
//         console.log(error)
//     } finally {
//         loading.value = false;
//     }
// }

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.pokename}`)


</script>

<template>
    <div v-if="loading">
        <button class="btn btn-success" type="button" disabled>
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          Loading...
        </button>
    </div>
    <div v-else>
        <div class="card border-success mb-3">
            <div class="card-header bg-transparent border-success">
                <h1 class="text-success">Pokemon</h1>
            </div>
            <div class="card-body text-success">
              <h5 class="card-title">{{ $route.params.pokename }}</h5>
              <div>
                <img :src="data.sprites?.back_default" alt="">
                <img :src="data.sprites?.front_default" alt="">
                <img :src="data.sprites?.back_default" alt="">
                <img :src="data.sprites?.front_default" alt="">
              </div>
            </div>
            <div class="card-footer bg-transparent border-success">
                <button class="btn btn-success active" @click="returnBack()">Regresar</button>
            </div>
        </div>
    </div>
</template>