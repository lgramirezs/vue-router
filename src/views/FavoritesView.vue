<script setup>
import {useGoBack} from '@/composables/goBack';
import { useFavoriteStore } from '../store/favorites';
import { storeToRefs } from 'pinia';

//store
const useFavorite = useFavoriteStore()
const {deletePokemon} = useFavorite
const { favorites } = storeToRefs(useFavorite)

//composables
const {goBack} = useGoBack()

const remove = (pokeId) => {
    if (confirm('¿Deseas eliminar este registro?')) {
        deletePokemon(pokeId)
    }
}

</script>

<template>
    <div>
        <h3>Mis Pokemones Favoritos</h3>
        <hr>
        <div class="alert alert-danger" role="alert" v-if="favorites.length == 0">
            No hay registros 
        </div>
        <div v-else>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Pokemon</th>
                        <th scope="col">URL</th>
                        <th scope="col">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="favorite in favorites" :key="favorite">
                        <td>{{favorite.name}}</td>
                        <td><a class="text-success" :href="`https://pokeapi.co/api/v2/pokemon/${favorite.name}/`" target="_blank">pokeapi.co/api/v2/pokemon/{{ favorite.name }}/</a></td>
                        <td>
                            <RouterLink class="btn btn-outline-success btn-sm" :to="`/pokemones/${favorite.name}`">Ver</RouterLink>
                            <button @click="remove(favorite.id)" class="btn btn-outline-danger btn-sm ms-1">Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <button class="btn btn-sm btn-success" @click="goBack">Regresar</button>
    </div>
</template>