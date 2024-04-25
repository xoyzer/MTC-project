<template>
    <div class="both-bars">
        <div class="left-side-bar">
            <h1 class="header left-side">Заполните информацию</h1>
            <form class="info-left-side">
                <div class="block-info">
                    <input class="organistation-full-name field" placeholder="Полное название организации" />
                    <input class="address field" placeholder="Адрес" />
                    <input class="phone field" placeholder="Телефон" />
                    <div class="posts-count-container">
                        <input class="posts-count field" placeholder="Количество постов" />
                        <button class="btn-arrow"></button>
                    </div>
                    <input class="schedule field" placeholder="График работы" />
                    <button class="btn-continue">Продолжить</button>

                </div>
            </form>
        </div>
        <div class="right-side-bar">
            <div class="post-container">
                <div class="post-container-column">
                    <h2 class="post-count">Пост 1</h2>
                    <input class="post-field" placeholder="количество сотрудников" />
                    <div class="service-name">
                        <h4 class="post-title">Название услуги</h4>
                        <input class="post-field" />
                    </div>
                    <div class="service-duration">
                        <h4 class="post-title">Длительность услуги</h4>
                        <input class="post-field" />
                    </div>
                    <button class="post-btn">+ Добавить</button>
                </div>
                <div class="post-container-column">
                    <div class="service-container">
                        <h4>Услуги:</h4>
                        <div class="added-service">
                            <button class="btn-cross"></button>
                            <h4>Мойка: 40 минут</h4>
                        </div>
                        <div class="added-service">
                            <button class="btn-cross"></button>
                            <h4>Химчистка: 1.5 ч</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="post-container">
                <div class="post-container-column">
                    <h2 class="post-count">Пост 2</h2>
                    <input class="post-field" placeholder="количество сотрудников" />
                    <div class="service-name">
                        <h4 class="post-title">Название услуги</h4>
                        <input class="post-field" />
                    </div>
                    <div class="service-duration">
                        <h4 class="post-title">Длительность услуги</h4>
                        <input class="post-field" />
                    </div>
                    <button class="post-btn">+ Добавить</button>
                </div>
                <div class="post-container-column">
                    <div class="service-container">
                        <h4>Услуги:</h4>
                        <div class="added-service">
                            <button class="btn-cross"></button>
                            <h4>Мойка: 40 минут</h4>
                        </div>
                        <div class="added-service"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
