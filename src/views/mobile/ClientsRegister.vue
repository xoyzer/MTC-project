<template>
    <form @submit.prevent="submitHandler">
        <main class="user-main">
            <h1 class="login-to-application-header">Регистрация</h1>
            <label class="user-container user-phone">
                <h2>Введите телефон</h2>
                <input
                    class="user-input user-pic phone"
                    type="tel"
                    maxlength="12"
                    placeholder="Phone Number"
                    required
                    v-model="phone"
                    @focus="handleFocus"
                    @blur="handleBlur"
                />
            </label>
            <label class="user-container user-name">
                <h2>Введите имя</h2>
                <input class="user-input user-pic login" placeholder="First Name" required v-model="f_name" />
            </label>
            <label class="user-container user-name">
                <h2>Введите фамилию</h2>
                <input class="user-input user-pic login" placeholder="Last Name" required v-model="l_name" />
            </label>
            <label class="user-container user-name">
                <h2>Введите дату рождения</h2>
                <input
                    class="user-input user-pic login"
                    placeholder="Birthday"
                    type="date"
                    required
                    v-model="birthday"
                />
            </label>
            <label class="user-container user-name">
                <h2>Введите почту</h2>
                <input class="user-input user-pic login" placeholder="Email" type="email" required v-model="email" />
            </label>
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
                <button type="button" class="btn-eye-user register" @click="togglePasswordVisibility">
                    <img src="../../assets/eye-open.png" alt="eye" />
                </button>
            </label>
            <label class="user-container user-password repeat">
                <h2>Повторите пароль</h2>
                <input
                    class="user-input user-pic password"
                    type="password"
                    minlength="6"
                    maxlength="20"
                    required
                    placeholder="Password"
                    v-model="passwordRepeat"
                    ref="passwordRepeatE1"
                />
            </label>
        </main>
        <footer class="user-footer register">
            <button class="btn-submit-user register">Зарегистрироваться</button>
            <h2>
                <router-link to="/clientsLogin"> Уже есть аккаунт? </router-link>
            </h2>
        </footer>
    </form>
</template>

<script>
export default {
    data() {
        return {
            phone: "",
            f_name: "",
            l_name: "",
            birthday: "",
            email: "",
            login: "",
            password: "",
            passwordRepeat: "",
        };
    },
    methods: {
        togglePasswordVisibility() {
            const passwordInput = this.$refs.passwordInput;
            const passwordRepeatInput = this.$refs.passwordRepeatE1;
            passwordInput.type === "password" ? (passwordInput.type = "text") : (passwordInput.type = "password");
            passwordRepeatInput.type === "password"
                ? (passwordRepeatInput.type = "text")
                : (passwordRepeatInput.type = "password");
        },
        checkPasswordEqualty() {
            const { password, passwordRepeat } = this;
            const { passwordRepeatE1 } = this.$refs;
            password !== passwordRepeat
                ? passwordRepeatE1.setCustomValidity("Пароли должны совпадать")
                : passwordRepeatE1.setCustomValidity("");
        },
        handleFocus() {
            if (this.phone === "") {
                this.phone = "+7";
            }
        },
        handleBlur() {
            if (this.phone === "+7") {
                this.phone = "";
            }
        },
        async submitHandler() {
            if (this.password !== this.passwordRepeat) {
                alert("Пароли не совпадают");
                return;
            }

            const userData = {
                login: this.login,
                password: this.password,
                l_name: this.l_name,
                f_name: this.f_name,
                email: this.email,
                phone: this.phone,
                birthday: this.birthday,
            };

            try {
                await this.$store.dispatch("registerUser", userData);
                this.$router.push("/cart");
            } catch (error) {
                console.error("Ошибка регистрации:", error);
            }
        },
    },
};
</script>
