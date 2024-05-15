<template>
    <nav class="navigation">
        <ul class="navigation-ul">
            <li class="navigation-li">
                <a class="navigation-a" href="#"><span class="analytics">Аналитика</span></a>
            </li>
            <li class="navigation-li"><a class="navigation-a" href="#">Посты</a></li>
            <li class="navigation-li"><a class="navigation-a" href="#">Заказы</a></li>
            <li class="navigation-li"><a class="navigation-a" href="#">Информация</a></li>
            <li class="navigation-li"><a class="navigation-a" href="#">История</a></li>
        </ul>
    </nav>
    <header class="info-container">
        <div class="avatar-container">
            <div class="avatar-picture"></div>
            <button type="button" class="btn-avatar">Добавить аватар</button>
        </div>
        <div class="contact-info">
            <h2 class="contact-info-title">ООО автомойка</h2>
            <h2 class="contact-info-title">г. Екатеринбург ул. Пушкина, 19</h2>
            <h2 class="contact-info-title">+7 983 345 09 43</h2>
            <h2 class="contact-info-title">carwash96@email.com</h2>
            <router-link to="/info">
                <button type="button" class="btn-contact-info">Изменить/ Добавить информацию</button>
            </router-link>
        </div>
        <router-link to="/register">
            <button class="btn-exit">Выйти</button>
        </router-link>
    </header>
    <main class="main">
        <h1 class="post-header-container">Активные посты</h1>
        <div class="active-post-container">
            <div class="active-post">
                <h1 class="post-header">Пост 1</h1>
                <p class="post-info">АОООАА 96 16:00</p>
                <p class="post-info">Р137ЛК 96 15:00</p>
            </div>
            <div class="active-post">
                <h1 class="post-header">Пост 2</h1>
            </div>
            <div class="active-post"></div>
        </div>

        <h1 class="post-header">Заказы</h1>
        <div class="order">
            <div class="orders-container">
                <div class="order-row">
                    <img src="../../assets/phone-call-01.png" width="24px" height="24px" alt="phone" />
                    <h4 class="order-info">Алексей A000AA96 Lamborghini Aventador, 2018</h4>
                    <h4 class="order-time">17.03.2024 16:00</h4>
                    <button class="btn-accept">Подтвердить</button>
                    <button class="btn-cancel">Отменить заказ</button>
                </div>
                <div class="order-row">
                    <p>Выбранные услуги:</p>
                    <h4 class="selected-service-account">Мойка</h4>
                </div>
            </div>
            <div class="orders-container">
                <div class="order-row">
                    <img src="../../assets/phone-call-01.png" width="24px" height="24px" alt="" />
                    <h4 class="order-info">Максим Р137ЛК96 Suburu Forester, 2019</h4>
                    <h4 class="order-time">17.03.2024 15:00</h4>
                    <button class="btn-waiting">Ожидание</button>
                    <button class="btn-cancel">Отменить заказ</button>
                </div>
                <div class="order-row">
                    <p>Выбранные услуги:</p>
                    <h4 class="selected-service">Мойка</h4>
                </div>
            </div>
        </div>

        <h1 class="post-header">История заказов</h1>
        <div class="orders-history-container">
            <div class="sort-row">
                <p>Сортировка:</p>
                <ul>
                    <li>
                        <a href="#"
                            >По дате <img src="../../assets/chevron-down.png" width="24px" height="24px" alt="chevron"
                        /></a>
                    </li>
                    <li>
                        <a href="#"
                            >По услугам
                            <img src="../../assets/chevron-down.png" width="24px" height="24px" alt="chevron"
                        /></a>
                    </li>
                </ul>
            </div>
            <div class="orders-history">
                <div class="order-history-column-info">
                    <p>11.03.2024 19:00</p>
                    <p>Юрий К343КВ96 Nissan Almera, 2016</p>
                    <div class="selected-service-container">
                        <h4 class="selected-service">Мойка кузова</h4>
                    </div>
                </div>
                <div class="order-history-column-info">
                    <p>Статус:</p>
                    <div class="success-container">Успешно</div>
                </div>
            </div>
            <div class="orders-history">
                <div class="order-history-column-info">
                    <p>12.03.2024 14:00</p>
                    <p>Олег П653ЕК96 Kia K5, 2023</p>
                    <div class="selected-service-container">
                        <h4 class="selected-service">Мойка кузова</h4>
                        <h4 class="selected-service">Химчистка</h4>
                    </div>
                </div>
                <div class="order-history-column-info">
                    <p>Статус:</p>
                    <div class="cancel-container">Отменён</div>
                </div>
            </div>
        </div>
    </main>
</template>
