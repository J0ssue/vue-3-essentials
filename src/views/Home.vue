<template>
    <div class="home">
        <p>Spaces left: {{ spacesLeft }} out of {{ capacity }}</p>

        <div>Capacity: {{ capacity }}</div>

        <button @click="increaseCapacity()">increase capacity</button>

        <ul>
            <li
                v-for="(name,i) in attending"
                :key="i"
            >{{ name }}</li>
        </ul>
    </div>
</template>

<script>
    import useEventSpace from "@/use/event-space";
    import useMapping from "@/use/mapping";
    export default {
        name: "Home",
        setup() {
            return { ...useMapping(), ...useEventSpace() };
        }

    };
</script>
