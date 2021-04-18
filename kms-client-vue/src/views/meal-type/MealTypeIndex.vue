<template>
    <div class="meal-type">
        <h1>MealTypes index</h1>
        <br />
        <p>
            <a href="#">Create New</a>
        </p>
        <table class="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>MealTypeName</th>
                    <th>Price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(mealType, index) in mealTypes" :key="index">
                    <td>{{ mealType.id }}</td>
                    <td>{{ mealType.mealTypeName }}</td>
                    <td>{{ mealType.price }}</td>
                    <td>
                        <a load="/meal-type-edit(${item.id})">Edit</a> |
                        <router-link :to="'/meal-types/' + mealType.id"
                            >Details</router-link
                        >
                        |
                        <a load="/meal-type-delete(${item.id})">Delete</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { IMealType } from "@/domain/IMealType";

@Options({
    components: {},
    props: {},
})
export default class MealTypeIndex extends Vue {
    mealTypes: IMealType[] = [];

    async mounted(): Promise<void> {
        const response = await this.axios.get(
            "https://localhost:5001/api/v1/MealTypes"
        );
        this.mealTypes = response.data;
    }
}
</script>
