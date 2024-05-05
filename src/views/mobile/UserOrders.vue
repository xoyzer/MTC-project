<template>
    <header class="user-orders-header">
        <h1>Ваши заказы:</h1>
    </header>
    <main class="user-orders-main">
        <div class="user-order">
            <p>Запись: 17.03.2024 16:00</p>
            <button class="btn-more-user">
                <p>Подробнее</p>
                <img src="../../assets/arrow.png" alt="" />
            </button>
        </div>
        <div class="order-more show">
            <p>Услуги:</p>
            <ul>
                <li>
                    <p>Автомойка</p>
                </li>
            </ul>
            <p>Информация:</p>
            <ul>
                <li>
                    <p>Lamborghini Aventador A000AA 96</p>
                </li>
            </ul>
            <div class="order-button-container">
                <button type="button" class="btn-order-full confirmed">
                    <p>Подтверждено</p>
                    <img src="../../assets/tick.png" alt="tick" />
                </button>
                <button type="button" class="btn-order-full cancel">Отменить заказ</button>
            </div>
        </div>
    </main>
    <footer class="orders-footer-user">
        <button class="btn-order-user more">Заказать ещё</button>
        <button class="btn-order-user-exit">Выйти</button>
    </footer>
</template>
