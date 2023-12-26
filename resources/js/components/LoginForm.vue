<template>
    <div id="app">
        <v-app-bar
            app
            color="primary"
            dark
        >
            <v-toolbar-title>IT Invent Web</v-toolbar-title>
        </v-app-bar>
        <main class="py-10">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-header">Login</div>
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="login">Login or Email</label>
                                    <input type="text"
                                           class="form-control"
                                           v-model="user.login"
                                           id="login"
                                           placeholder="Enter login or email"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input type="password"
                                           class="form-control"
                                           v-model="user.password"
                                           id="password"
                                           placeholder="Enter password"
                                           v-on:keyup.enter="login"
                                    >
                                </div>
                                <div class="text-center">
                                    <button type="submit" @click="login" class="btn btn-primary text-light mt-4">Войти</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
import Auth from '../Auth.js';

export default {
    data() {
        return {
            user: {
                login: '',
                password: '',
            }
        };
    },
    methods: {
        login() {
            axios.post('/api/v1/user/login', this.user)
                .then(({data}) => {
                    Auth.login(data.access_token, data.user); //set local storage
                    this.$router.push('/');
                })
                .catch((error) => {
                    console.log(error);
                    alert("Неправильный Email или пароль!")
                });
        }
    }
}
</script>

<style lang="sass">
</style>
