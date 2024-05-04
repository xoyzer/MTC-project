<template>
    <div class="both-bars">
        <div class="left-side-bar">
            <form class="info-left-side">
                <h1 class="header-left-side">Заполните информацию</h1>
                <div class="block-info">
                    <label class="label" for="">
                        <input
                            class="organistation-full-name field"
                            placeholder="Полное название организации"
                            required
                        />
                    </label>
                    <label class="label" for="">
                        <input class="address field" type="email" placeholder="Адрес" required />
                    </label>
                    <label class="label" for="">
                        <input class="phone field" placeholder="Телефон" type="tel" pattern="[0-9]*" required />
                    </label>
                    <label class="label posts-count-container">
                        <input class="posts-count field" type="number" placeholder="Количество постов" required />
                        <button type="button" class="btn-arrow"></button>
                    </label>
                    <label class="label" for="">
                        <input class="schedule field" type="text" placeholder="График работы" required />
                    </label>
                    <button type="submit" class="btn-continue">Продолжить</button>
                </div>
            </form>
        </div>
        <div class="right-side-bar">
            <div class="post-container">
                <div class="post-container-column">
                    <label class="label" for="">
                        <h2 class="post-count">Пост 1</h2>
                        <input class="post-field" placeholder="количество сотрудников" required />
                    </label>
                    <label class="label service-name">
                        <h4 class="post-title">Название услуги</h4>
                        <input class="post-field" required />
                    </label>
                    <label class="label service-duration">
                        <h4 class="post-title">Длительность услуги</h4>
                        <input class="post-field" required />
                    </label>
                    <button type="button" class="post-btn">+ Добавить</button>
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
                    <label class="label" for="">
                        <h2 class="post-count">Пост 2</h2>
                        <input class="post-field" placeholder="количество сотрудников" required />
                    </label>
                    <label class="label service-name">
                        <h4 class="post-title">Название услуги</h4>
                        <input class="post-field" required />
                    </label>
                    <label class="label service-duration">
                        <h4 class="post-title">Длительность услуги</h4>
                        <input class="post-field" required />
                    </label>
                    <button type="button" class="post-btn">+ Добавить</button>
                </div>
                <div class="post-container-column">
                    <div class="service-container">
                        <h4>Услуги:</h4>
                        <div class="added-service">
                            <button class="btn-cross"></button>
                            <h4>Мойка: 40 минут</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
