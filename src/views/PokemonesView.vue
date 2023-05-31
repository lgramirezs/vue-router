<script setup>
import {ref, computed} from 'vue';
import { RouterLink } from 'vue-router'
import { useGetData } from '@/composables/getData';

const { getData, data ,loading } = useGetData()

const start  = ref(0)
const end    = ref(5)
const byPage = 5


const next = () => {
    start.value += byPage;
    end.value += byPage;
}

const prev = () => {
    start.value -= byPage;
    end.value -= byPage;

}


// const getData = async() => {
//     try {
//         const  { data }   = await axios.get('https://pokeapi.co/api/v2/pokemon');
//         pokemones.value = data.results
//     } catch (error) {
//         console.log(error)
//     }
// }

getData('https://pokeapi.co/api/v2/pokemon')


const prevDisabled = computed(() => {
    return (start.value === 0) ? true : false ; 
})

const nextDisabled = computed(() => {
    return (end.value === data.value.results.length) ? true : false ; 
})

</script>

<template>
    <div>
        <h3>Pokemones: Lote de 20</h3>
        <hr>

        <div class="pb-5">
            <div class="row justify-content-center">
                <div class="btn-group w-50" role="group" aria-label="buttons">
                  <button :disabled="data?.previous == null" @click="getData(data.previous)" type="button" class="btn btn-success">Lote anterior</button>
                  <button :disabled="data?.next == null" @click="getData(data.next)" type="button" class="btn btn-success" >Siguiente lote</button>
                </div>
            </div>
        </div>

        <p v-if="loading">Cargando...</p>

        <div v-if="data">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Pokemon</th>
                        <th scope="col">URL</th>
                        <th scope="col">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(pokemon,index) in data.results.slice(start,end)" :key="index">
                        <td><RouterLink class="text-decoration-none text-success" :to="`/pokemones/${pokemon.name}`">{{ pokemon.name }}</RouterLink> </td>
                        <td><a class="text-success" :href="pokemon.url" target="_blank">{{ pokemon.url.substr(8) }}</a></td>
                        <td><RouterLink class="btn btn-outline-success btn-sm" :to="`/pokemones/${pokemon.name}`">Ver</RouterLink> </td>
                    </tr>
                </tbody>
            </table>
            
            <div class="container">
                <div class="row justify-content-center">
                    <div class="btn-group w-50" role="group" aria-label="buttons">
                      <button @click="prev" type="button" class="btn btn-success" :disabled="prevDisabled">Anterior</button>
                      <button @click="next" type="button" class="btn btn-success" :disabled="nextDisabled">Siguiente</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>