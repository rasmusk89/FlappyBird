<template>
    <h1>Details</h1>

    <div>
        <h4>MealType</h4>
        <hr />

        <dl class="row">
            <dt class="col-sm-4">Id</dt>
            <dd class="col-sm-8">{{ id }}</dd>
            <dt class="col-sm-4">MealTypeName</dt>
            <dd class="col-sm-8">{{ mealType.mealTypeName }}</dd>
            <dt class="col-sm-4">Price</dt>
            <dd class="col-sm-8">{{ mealType.price }}</dd>
        </dl>
    </div>
    <div>
        <a load="/meal-type-edit">Edit</a> |
        <a load="/meal-type-index">Back to List</a>
    </div>
</template>

<script  lang="ts">
import { IMealType } from "@/domain/MealType/IMealType";
import { Options, Vue } from "vue-class-component";

@Options({
    components: {},
    props: {},
})
export default class MealTypeDetails extends Vue {
    mealType: IMealType = {
        mealTypeName: "",
        price: 0,
    };

    id: string | string[] = "123";

    async mounted(): Promise<void> {
        this.id = this.$route.params.id;
        const response = await this.axios.get(
            "https://localhost:5001/api/v1/MealTypes/" + this.id
        );
        if (response.status === 200) {
            this.mealType.mealTypeName = response.data.mealTypeName;
            this.mealType.price = response.data.price;
        }
    }
}
</script>
