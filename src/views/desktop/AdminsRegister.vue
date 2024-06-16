<template>
    <form class="info" @submit.prevent="submitHandler">
        <h1 class="header">Регистрация автомойки</h1>
        <label class="container">
            <h3>Введите Email</h3>
            <input type="email" class="block email" required v-model="email" />
        </label>
        <label class="adminReg container">
            <h3>Название организации</h3>
            <input type="text" class="block organisation-name" required v-model="name" />
        </label>
        <label class="container">
            <h3>Введите имя</h3>
            <input class="block" required v-model="f_name" />
        </label>
        <label class="container">
            <h3>Введите фамилию</h3>
            <input class="block" required v-model="l_name" />
        </label>
        <label class="container">
            <h3>Введите отчество</h3>
            <input class="block" placeholder="При наличии" v-model="m_name" />
        </label>
        <label class="container">
            <h3>Введите телефон</h3>
            <input
                type="tel"
                class="block"
                required
                v-model="phone"
                @focus="handleFocus"
                @blur="handleBlur"
                pattern="[+0-9]*"
                maxlength="12"
            />
        </label>
        <label class="container">
            <h3>Введите дату рождения</h3>
            <input type="date" class="block" required v-model="birthday" />
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
        <label class="adminReg container">
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
        <label class="adminReg container tick">
            <h3>У вас уже есть клиентский аккаунт?</h3>
            <input type="checkbox" v-model="haveClientAccount" />
        </label>
        <footer class="footer">
            <div class="container-footer">
                <button type="submit" class="sign-up-button">Зарегистрироваться</button>
                <router-link to="/adminsLogin">
                    <button class="sign-in-button">Вход</button>
                </router-link>
            </div>
        </footer>
    </form>
</template>

<script>
export default {
    name: "admin-register",
    data() {
        return {
            email: "",
            password: "",
            passwordRepeat: "",
            name: "",
            f_name: "",
            l_name: "",
            m_name: "",
            phone: "",
            birthday: "",
            haveClientAccount: false,
        };
    },
    watch: {
        passwordRepeat: "checkPasswordsEquality",
        password: "checkPasswordsEquality",
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
        checkPasswordsEquality() {
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

            const adminData = this.haveClientAccount
                ? {
                      login: this.email,
                      password: this.password,
                      phone: this.phone,
                      haveClientAccount: true,
                  }
                : {
                      login: this.email,
                      password: this.password,
                      l_name: this.l_name,
                      f_name: this.f_name,
                      m_name: this.m_name,
                      phone: this.phone,
                      birthday: this.birthday,
                      email: this.email,
                      haveClientAccount: false,
                  };

            try {
                await this.$store.dispatch("registerAdmin", adminData);
                localStorage.setItem("email", this.email);
                localStorage.setItem("name", this.name);
                this.$router.push("/info");
            } catch (error) {
                console.error("Ошибка регистрации администратора:", error);
            }
        },
    },
};
</script>
