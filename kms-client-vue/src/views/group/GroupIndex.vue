<template>
    <div class="group">
        <h1>This is a groups index page</h1>
        <p>
            <a href="#">Create New</a>
        </p>
        <table class="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>GroupName</th>
                    <th>MaxNumberOfChildren</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(group, index) in groups" :key="index">
                    <td>{{ group.id }}</td>
                    <td>{{ group.name }}</td>
                    <td>{{ group.maxNumberOfChildren }}</td>
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
import { IGroup } from "@/domain/IGroup";
import store from "@/store";
import { Options, Vue } from "vue-class-component";

@Options({
    components: {},
    props: {},
})
export default class GroupIndex extends Vue {
    groups: IGroup[] = [];
    token: string | null = store.state.token;

    async mounted(): Promise<void> {
        const response = await this.axios.get(
            "https://localhost:5001/api/v1/Groups",
            { headers: { Authorization: "Bearer " + this.token } }
        );
        console.log(response.data);
        this.groups = response.data;
    }
}
</script>
