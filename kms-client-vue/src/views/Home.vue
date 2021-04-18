<template>
   <div class="home">
        <h1>This is a home page</h1>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
    components: {
    },
})
export default class Home extends Vue {}
</script>
