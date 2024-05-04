<template>
    <form class="info">
        <h1 class="header">Регистрация автомойки</h1>
        <label class="container">
            <h3>Введите Email</h3>
            <input type="email" class="block email" required />
        </label>
        <label class="container">
            <h3>Название организации</h3>
            <input type="text" class="block organisation-name" required />
        </label>
        <label class="container">
            <h3>Введите пароль</h3>
            <label class="password-container">
                <input type="password" class="block password" required />
                <button type="button" class="btn-eye">
                    <img src="../assets/eye-closed.png" alt="eye" />
                </button>
            </label>
        </label>
        <label class="container">
            <h3>Повторите пароль</h3>
            <input type="password" class="block password-repeat" required />
        </label>
        <footer class="footer">
            <div class="container-footer">
                <button class="sign-up-button">Зарегистрироваться</button>
                <button class="sign-in-button">Войти</button>
            </div>
        </footer>
    </form>
</template>

<script>
// export default {
//     name: "register",
// };
</script>

<style></style>
