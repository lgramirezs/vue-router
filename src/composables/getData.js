import {ref} from 'vue';
import axios from 'axios'


export const useGetData = () => {

    /** propiedades */
    const data = ref(null)
    const loading = ref(true)

    /* método*/
    const getData = async(url) => {
        try {
            const res = await axios.get(url)
            data.value = res.data 
        } catch (error) {
            console.log(error)
        } finally {
            loading.value = false
        }
    };

    return {
        getData,
        data,
        loading,
    }
}