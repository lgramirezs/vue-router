import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFavoriteStore = defineStore('favorites', () => {
    
    const favorites = ref([])

    if (localStorage.getItem("favoritos")) {
        // Recupero registro del LocalStorage
        favorites.value = JSON.parse(localStorage.getItem("favoritos"))
    }
    
    function addFavorite(pokemon){
        favorites.value.push(pokemon)
        // Registro mis cambios en el LocalStorage
        localStorage.setItem('favoritos', JSON.stringify(favorites.value))
    }

    function deletePokemon(id){
        favorites.value = favorites.value.filter(item => item.id !== id)
        localStorage.setItem('favoritos', JSON.stringify(favorites.value))
    }
    
    // const findPoke = name => {
    //     favorites.value.find(item => item.name === name)
    // }

    return {
        favorites,
        addFavorite,
        deletePokemon,
        // findPoke
    }
})