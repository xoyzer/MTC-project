<template>
    <form class="info" @submit.prevent="submitHandler">
        <h1 class="header">Вход в автомойку</h1>
        <label class="container">
            <h3>Введите Email</h3>
            <input type="email" class="block email" required v-model="email" />
        </label>
        <label class="adminReg container">
            <h3>Введите пароль</h3>
            <label class="password-container">
                <input
                    type="password"
                    minlength="6"
                    maxlength="20"
                    class="block password"
                    required
                    v-model="password"
                    ref="passwordInput"
                />
                <button type="button" class="btn-eye" @click="togglePasswordVisibility">
                    <img src="../../assets/eye-closed.png" alt="eye" />
                </button>
            </label>
        </label>
        <footer class="footer">
            <div class="container-footer">
                <router-link to="/adminsRegister">
                    <button class="sign-up-button">Регистрация</button>
                </router-link>
                <button type="submit" class="sign-in-button">Войти</button>
            </div>
        </footer>
    </form>
</template>

<script>
export default {
    name: "admin-login",
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        togglePasswordVisibility() {
            const passwordInput = this.$refs.passwordInput;
            passwordInput.type === "password" ? (passwordInput.type = "text") : (passwordInput.type = "password");
        },
        async submitHandler() {
            const formData = {
                email: this.email,
                password: this.password,
            };

            try {
                await this.$store.dispatch("loginAdmin", formData);
                this.$router.push("/dashboard");
            } catch (error) {
                console.error("Ошибка входа администратора:", error);
            }
        },
    },
};
</script>
