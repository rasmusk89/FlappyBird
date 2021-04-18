<template>
    <h1>Details</h1>

    <div>
        <h4>MealType</h4>
        <hr />

        <dl class="row">
            <dt class="col-sm-4">Id</dt>
            <dd class="col-sm-8">${data.id}</dd>
            <dt class="col-sm-4">MealTypeName</dt>
            <dd class="col-sm-8">${data.mealTypeName}</dd>
            <dt class="col-sm-4">Price</dt>
            <dd class="col-sm-8">${data.price}</dd>
        </dl>
    </div>
    <div>
        <a load="/meal-type-edit">Edit</a> |
        <a load="/meal-type-index">Back to List</a>
    </div>
</template>

<script  lang="ts">
import { Options, Vue } from "vue-class-component";
import { IMealType } from "@/domain/IMealType";
import store from "@/store";

@Options({
    components: {},
    props: {},
})
export default class MealTypeIndex extends Vue {
    mealTypes: IMealType[] = [];
    token: string | null = store.state.token;
    id: string = "";

    async mounted(): Promise<void> {
        const response = await this.axios.get(
            "https://localhost:5001/api/v1/MealTypes/" + this.id
        );
        this.mealTypes = response.data;
    }
}
</script>