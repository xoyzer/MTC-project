<template>
    <form class="info" @submit.prevent="submitHandler">
        <h1 class="header">Регистрация автомойки</h1>
        <label class="container">
            <h3>Введите Email</h3>
            <input type="email" class="block email" required v-model="email" />
        </label>
        <label class="container">
            <h3>Название организации</h3>
            <input type="text" class="block organisation-name" required v-model="organisationName" />
        </label>
        <label class="container">
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
        <label class="container">
            <h3>Повторите пароль</h3>
            <input
                type="password"
                minlength="6"
                maxlength="20"
                class="block password-repeat"
                v-model="passwordRepeat"
                required
                ref="passwordRepeatE1"
            />
        </label>
        <footer class="footer">
            <div class="container-footer">
                <button type="submit" class="sign-up-button">Зарегистрироваться</button>
                <button type="submit" class="sign-in-button">Войти</button>
            </div>
        </footer>
    </form>
</template>

<script>
// import { email } from "vuelidate/lib/validators";
export default {
    name: "login",
    data: () => ({
        email: "",
        password: "",
        passwordRepeat: "",
        organisationName: "",
    }),

    watch: {
        passwordRepeat: "checkPasswordsEquality",
        password: "checkPasswordsEquality",
    },

    methods: {
        togglePasswordVisibility() {
            const passwordInput = this.$refs.passwordInput;
            passwordInput.type === "password" ? (passwordInput.type = "text") : (passwordInput.type = "password");
        },
        checkPasswordsEquality() {
            const { password, passwordRepeat } = this;
            const { passwordRepeatE1 } = this.$refs;

            password !== passwordRepeat
                ? passwordRepeatE1.setCustomValidity("Пароли должны совпадать")
                : passwordRepeatE1.setCustomValidity("");
        },
        submitHandler() {
            const formData = {
                email: this.email,
                password: this.password,
                organisationName: this.organisationName,
            };
            console.log(formData);
            this.$router.push("/info");
        },
    },
};
</script>

<style></style>
