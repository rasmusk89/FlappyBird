<template>
    <header>
        <nav
            class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3"
        >
            <div class="container">
                <router-link class="navbar-brand" to="/">WebApp</router-link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="navbar-collapse collapse d-sm-inline-flex justify-content-between"
                >
                    <ul class="navbar-nav flex-grow-1">
                        <li>
                            <router-link
                                class="nav-link text-dark"
                                to="/meal-types"
                                >Meal types</router-link
                            >
                        </li>
                        <li>
                            <router-link
                                class="nav-link text-dark"
                                to="/groups"
                                >Groups</router-link
                            >
                        </li>
                        <li>
                            <router-link
                                class="nav-link text-dark"
                                to="/teachers"
                                >Teachers</router-link
                            >
                        </li>
                    </ul>
                    <ul v-if="token == null" class="navbar-nav">
                        <li class="nav-item">
                            <router-link
                                class="nav-link text-dark"
                                to="/identity/login"
                                >Login</router-link
                            >
                        </li>
                    </ul>
                    <ul v-if="token != null" class="navbar-nav">
                        <li class="nav-item">
                            <a
                                href="#"
                                class="nav-link text-dark"
                                @click="logOut()"
                                >Logout</a
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <div class="container">
        <main role="main" class="pb-3">
            <router-view />
        </main>
    </div>

    <footer class="border-top footer text-muted">
        <div class="container">Vue client</div>
    </footer>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import store from "@/store/index";

@Options({
    components: {},
})
export default class App extends Vue {
    get token(): string | null {
        return store.state.token;
    }

    logOut(): void {
        store.commit("logOut");
        this.$router.push('/');
    }
}
</script>

<style>
a.navbar-brand {
    white-space: normal;
    text-align: center;
    word-break: break-all;
}

/* Provide sufficient contrast against white background */
a {
    color: #0366d6;
}

.btn-primary {
    color: #fff;
    background-color: #1b6ec2;
    border-color: #1861ac;
}

.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
    color: #fff;
    background-color: #1b6ec2;
    border-color: #1861ac;
}

/* Sticky footer styles
-------------------------------------------------- */
html {
    font-size: 14px;
}
@media (min-width: 768px) {
    html {
        font-size: 16px;
    }
}

.border-top {
    border-top: 1px solid #e5e5e5;
}
.border-bottom {
    border-bottom: 1px solid #e5e5e5;
}

.box-shadow {
    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05);
}

button.accept-policy {
    font-size: 1rem;
    line-height: inherit;
}

/* Sticky footer styles
-------------------------------------------------- */
html {
    position: relative;
    min-height: 100%;
}

body {
    /* Margin bottom by footer height */
    margin-bottom: 60px;
}
.footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    white-space: nowrap;
    line-height: 60px; /* Vertically center the text there */
}
</style>
