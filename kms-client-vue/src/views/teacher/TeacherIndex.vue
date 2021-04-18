<template>
    <div class="meal-type">
        <h1>This is a teachers index page</h1>
        <p>
            <a href="#">Create New</a>
        </p>
        <table class="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>SocialSecurityCode</th>
                    <th>GroupName</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(teacher, index) in teachers" :key="index">
                    <td>{{ teacher.id }}</td>
                    <td>{{ teacher.firstName }}</td>
                    <td>{{ teacher.lastName }}</td>
                    <td>{{ teacher.socialSecurityCode }}</td>
                    <td>{{ teacher.group }}</td>
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
import { ITeacher } from "@/domain/ITeacher";
import store from "@/store";

@Options({
    components: {},
    props: {},
})
export default class TeachersIndex extends Vue {
    teachers: ITeacher[] = [];
    token: string | null = store.state.token;

    async mounted(): Promise<void> {
        const response = await this.axios.get(
            "https://localhost:5001/api/v1/Teachers",
            {
                headers: {
                    Authorization: "Bearer " + this.token,
                },
            }
        );
        console.log(response.data);
        this.teachers = response.data;
    }
}
</script>
