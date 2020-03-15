    import {
        reactive,
        computed,
        toRefs
    } from "@vue/composition-api";

    export default function useMapping() {
        let meetup = reactive({
            speakers: ['Mariana', 'Oscar', 'Josue'],
        });

        return {
            ...toRefs(meetup)
        }
    };