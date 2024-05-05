<template>
    <form>
        <main class="user-main">
            <h1 class="login-to-application-header">Вход в приложение</h1>
            <label class="user-container user-login">
                <h2>Введите логин</h2>
                <input class="user-input user-login-pic" type="text" placeholder="User Name" required />
            </label>
            <label class="user-container user-password">
                <h2>Введите пароль</h2>
                <input class="user-input user-password-pic" type="password" placeholder="Password" required />
                <button type="button" class="btn-eye-user">
                    <img src="../../assets/eye-open.png" alt="eye" />
                </button>
                <a href=""> <h3 class="">Забыли пароль?</h3></a>
            </label>
            <button class="btn-login-user">Войти</button>
        </main>
        <footer class="user-footer">
            <label for="">
                <div class="or-line">
                    <img src="../../assets/line.png" height="1px" alt="line" />
                    <h2>or</h2>
                    <img src="../../assets/line.png" height="1px" alt="line" />
                </div>
                <button type="button" class="btn-vk"><img src="../../assets/vk.png" alt="vk" />Вконтакте</button>
                <h2>
                    Нет аккаунта? <a href="#"><span>Зарегистрируйтесь!</span></a>
                </h2>
            </label>
        </footer>
    </form>
</template>
