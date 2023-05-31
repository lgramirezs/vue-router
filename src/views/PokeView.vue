<script setup>
// import axios from 'axios';
// import {ref} from 'vue';
import {useRoute} from 'vue-router';
import {useGetData} from '@/composables/getData';
import { useGoBack } from '@/composables/goBack';
import { useFavoriteStore } from '@/store/favorites'
import { ref, watchEffect } from 'vue';
import { storeToRefs } from 'pinia';

const disabled = ref(false) 

//store
const useFavorite = useFavoriteStore()
const { addFavorite} = useFavorite
const { favorites } = storeToRefs(useFavorite)


//composable
const { getData, data ,loading } = useGetData()
const {goBack} = useGoBack()
const route = useRoute()

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.pokename}`)

watchEffect(() => {
    const duplicateItems = favorites.value.filter(favorite => favorite.name == route.params.pokename);
    if (duplicateItems.length > 0) {
        disabled.value = true
    }
})


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
                <button class="btn btn-sm btn-success me-2" @click="goBack">Regresar</button>
                <button :disabled="disabled" class="btn btn-sm btn-primary" @click="addFavorite(data)">Agregar a favoritos</button>
            </div>
        </div>
    </div>
</template>