    import {
        reactive,
        computed,
        toRefs
    } from "@vue/composition-api";

    export default function useEventSpace() {
        let event = reactive({
            capacity: 3,
            attending: ['Mariana', 'Oscar', 'Josue'],
            spacesLeft: computed(() => {
                return event.capacity - event.attending.length;
            })
        });

        function increaseCapacity() {
            event.capacity++;
        }

        return {
            ...toRefs(event),
            increaseCapacity
        };
    }