<template>
    <h1 class="header">Регистрация автомойки</h1>
    <form class="info">
        <div class="container">
            <h3>Введите Email</h3>
            <input type="email" class="block email" />
        </div>
        <div class="container">
            <h3>Название организации</h3>
            <input type="text" class="block organisation-name" />
        </div>
        <div class="container">
            <h3>Введите пароль</h3>
            <div class="password-container">
                <input type="password" class="block password" />
                <button class="btn-eye">
                    <img src="../assets/eye-closed.png" alt="eye">
                </button>
            </div>
        </div>
        <div class="container">
            <h3>Повторите пароль</h3>
            <input type="password" class="block password-repeat" />
        </div>
    </form>
    <footer class="footer">
        <div class="container-footer">
            <button class="sign-up-button">Зарегистрироваться</button>
            <button class="sign-in-button">Войти</button>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Register",
};
</script>

<style></style>
