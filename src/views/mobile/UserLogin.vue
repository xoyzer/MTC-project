<template>
    <form @submit.prevent="submitHandler">
        <main class="user-main">
            <h1 class="login-to-application-header">Вход в приложение</h1>
            <label class="user-container user-login">
                <h2>Введите логин</h2>
                <input
                    class="user-input user-pic login"
                    type="text"
                    minlength="4"
                    maxlength="15"
                    placeholder="User Name"
                    required
                    v-model="login"
                />
            </label>
            <label class="user-container user-password">
                <h2>Введите пароль</h2>
                <input
                    class="user-input user-pic password"
                    type="password"
                    minlength="6"
                    maxlength="20"
                    required
                    placeholder="Password"
                    v-model="password"
                    ref="passwordInput"
                />
                <button type="button" class="btn-eye-user login" @click="togglePasswordVisibility">
                    <img src="../../assets/eye-open.png" alt="eye" />
                </button>
                <a href=""> <h3 class="">Забыли пароль?</h3></a>
            </label>
            <button class="btn-submit-user login">Войти</button>
        </main>
        <footer class="user-footer login">
            <label for="">
                <div class="or-line">
                    <img src="../../assets/line.png" height="1px" alt="line" />
                    <h2>or</h2>
                    <img src="../../assets/line.png" height="1px" alt="line" />
                </div>
                <button type="button" class="btn-vk"><img src="../../assets/vk.png" alt="vk" />Вконтакте</button>
                <h2>
                    Нет аккаунта?
                    <a href="#">
                        <router-link to="/userRegister"> <span>Зарегистрируйтесь!</span></router-link></a
                    >
                </h2>
            </label>
        </footer>
    </form>
</template>

<script>
export default {
    data: () => ({
        login: "",
        password: "",
    }),

    methods: {
        togglePasswordVisibility() {
            const passwordInput = this.$refs.passwordInput;
            passwordInput.type === "password" ? (passwordInput.type = "text") : (passwordInput.type = "password");
        },
        submitHandler() {
            const formData = {
                email: this.login,
                password: this.password,
            };
            console.log(formData);
            this.$router.push("/cart");
        },
    },
};
</script>
