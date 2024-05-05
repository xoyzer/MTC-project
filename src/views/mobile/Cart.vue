<template>
    <header class="cart-header">
        <h1>Корзина</h1>
        <button class="btn-return-cart">Вернуться</button>
    </header>
    <main class="cart-main">
        <div class="cart-main-column">
            <h3>Выбранные услуги</h3>
            <div class="selected-cart-sevice">
                <button type="button" class="btn-cross-cart">
                    <img src="../../assets/cross.png" alt="cross" />
                </button>
                <h3>Автомойка</h3>
            </div>
        </div>

        <div class="cart-main-column">
            <a class="" href="">
                <p>+Добавить услугу</p>
            </a>
        </div>
        <div class="cart-main-column goods show">
            <h2>Добавьте услуги:</h2>
            <div class="good-container">
                <span>Мойка ковриков</span>
                <button class="btn-plus">
                    <img src="../../assets/plus.png" alt="plus" />
                </button>
            </div>
            <div class="good-container">
                <span>Шиномонтаж</span>
                <button class="btn-plus">
                    <img src="../../assets/plus.png" alt="plus" />
                </button>
            </div>
            <div class="good-container">
                <span>Дошиповка</span>
                <button class="btn-plus">
                    <img src="../../assets/plus.png" alt="plus" />
                </button>
            </div>
            <div class="good-container">
                <span>Автомойка</span>
                <button class="btn-plus">
                    <img src="../../assets/tick.png" alt="plus" />
                </button>
            </div>
        </div>
    </main>
    <footer class="cart-footer">
        <h1>Выбрана 1 услуга</h1>
        <button class="btn-go">
            <p>Перейти к записи</p>
            <img src="../../assets/arrow-right.png" alt="arrow-right" />
        </button>
    </footer>
</template>
