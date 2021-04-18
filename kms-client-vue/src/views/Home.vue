<template>
    <div class="home">
        <h1>This is a home page ({{ id }})</h1>
        <input v-model="numberText" />
        <div>{{ numberText }}</div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
    components: {},
    props: {
        id: String,
    },
})
export default class Home extends Vue {
    id!: string;

    counter: number = 0;

    numberText: string = "10";

    increment(): void {
        this.counter++;
    }

    beforeCreate(): void {
        console.log("Before create");
    }

    created(): void {
        console.log("Created");
    }

    beforeMount(): void {
        console.log("Before mount");
    }

    mounted(): void {
        console.log("Mounted");
    }

    beforeUpdate(): void {
        console.log("Before update");
    }

    updated(): void {
        console.log("Updated");
    }

    activated(): void {
        console.log("Activated");
    }

    deactivated(): void {
        console.log("Deactivated");
    }

    beforeUnmount(): void {
        console.log("Before unmount");
    }

    unmounted(): void {
        console.log("Unmounted");
    }
}
</script>
