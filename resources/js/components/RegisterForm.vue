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
                            <div class="card-header">Register</div>
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="inputSurname">Фамилия</label>
                                    <input type="text"
                                           class="form-control"
                                           v-model="user.surname"
                                           id="inputSurname"
                                           placeholder="Фамилия"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="inputName">Имя</label>
                                    <input type="text"
                                           class="form-control"
                                           v-model="user.name"
                                           id="inputName"
                                           placeholder="Имя"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="inputPatronymic">Отчество</label>
                                    <input type="text"
                                           class="form-control"
                                           v-model="user.patronymic"
                                           id="inputPatronymic"
                                           placeholder="Отчество"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="inputLogin">Login</label>
                                    <input type="text"
                                           class="form-control"
                                           v-model="user.login"
                                           id="inputLogin"
                                           placeholder="Login"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="inputEmail">Email</label>
                                    <input type="email"
                                           class="form-control"
                                           v-model="user.email"
                                           id="inputEmail"
                                           placeholder="Email"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="inputPassword">Password</label>
                                    <input type="password"
                                           class="form-control"
                                           v-model="user.password"
                                           id="inputPassword"
                                           placeholder="Password"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="inputConfirmPassword">Confirm Password</label>
                                    <input type="password"
                                           class="form-control"
                                           v-model="user.password_confirmation"
                                           id="inputConfirmPassword"
                                           placeholder="Confirm Password"
                                           v-on:keyup.enter="register"
                                    >
                                </div>
                                <div class="text-center">
                                    <button type="submit" @click="register" class="btn btn-primary text-light mt-4">Зарегистрироваться</button>
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
export default {
    data() {
        return {
            user: {
                surname: '',
                name: '',
                patronymic: '',
                login: '',
                email: '',
                password: '',
                password_confirmation: ''
            }
        };
    },
    methods: {
        register() {
            axios.post('/api/v1/user/register', this.user)
                .then(({data}) => {
                    this.$router.push('/login');
                })
                .catch((error) => {
                    console.log(error);
                    alert("Ошибка регистрации!")
                });
        }
    }
}
</script>
