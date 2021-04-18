<template>
    <div class="meal-type">
        <h1>This is a meal types index page</h1>
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
                <tr v-for="(item, index) in mealTypes" :key="index">
                    <td>{{item.id}}</td>
                    <td>{{item.mealTypeName}}</td>
                    <td>{{item.price}}</td>
                    <td>
                        <a load="/meal-type-edit(${item.id})">Edit</a> |
                        <a load="/meal-type-details(${item.id})">Details</a> |
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
