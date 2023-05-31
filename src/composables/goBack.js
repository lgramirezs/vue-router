import { useRouter } from "vue-router";

export const useGoBack = () => {

    const router = useRouter();

    const goBack = () => {
        router.back()
        // router.push('/');
    }

    return {
        goBack
    }

} 