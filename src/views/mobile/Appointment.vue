<template>
    <form class="appointment-form" action="">
        <header class="appointment-header">
            <button type="button" class="btn-back-appointment">
                <img src="../../assets/exit.png" alt="exit" />
            </button>
            <h1>Запись на услугу</h1>
        </header>
        <main class="appointment-main">
            <div class="appointment-container-first">
                <label class="appointment-date-time">
                    <h3>Выберете дату:</h3>
                    <input class="appointment-date-input" type="text" required />
                </label>
                <label class="appointment-date-time">
                    <h3>Выберете время:</h3>
                    <input class="appointment-time-input" type="text" required />
                    <button type="button" class="btn-appointment-arrow">
                        <img src="../../assets/appointment-arrow.png" alt="arrow-down" />
                    </button>
                </label>
            </div>
            <div class="appointment-container-second">
                <h3>Информация об автомобиле</h3>
                <div class="appointment-block">
                    <label class="appointment-info-container">
                        <input
                            class="input-appointment-info-container highlighted-appointment-info"
                            placeholder="Год Выпуска*"
                            required
                        />
                        <button type="button" class="btn-appointment-arrow">
                            <img src="../../assets/appointment-arrow.png" alt="arrow-down" />
                        </button>
                    </label>
                    <label class="appointment-info-container" for="">
                        <input class="input-appointment-info-container" type="text" placeholder="Модель*" />
                        <button type="button" class="btn-appointment-arrow">
                            <img src="../../assets/appointment-arrow.png" alt="arrow-down" />
                        </button>
                    </label>
                    <label class="appointment-info-container" for="">
                        <input class="input-appointment-info-container" type="text" placeholder="Марка*" />
                        <button type="button" class="btn-appointment-arrow">
                            <img src="../../assets/appointment-arrow.png" alt="arrow-down" />
                        </button>
                    </label>
                    <label class="appointment-info-container" for="">
                        <input
                            class="input-appointment-info-container highlighted-appointment-info"
                            type="text"
                            placeholder="Гос номер*"
                            required
                        />
                        <button type="button" class="btn-appointment-arrow">
                            <img src="../../assets/appointment-arrow.png" alt="arrow-down" />
                        </button>
                    </label>
                </div>
            </div>
        </main>
        <footer class="appointment-footer">
            <button class="btn-appointment">Записаться</button>
        </footer>
        <div class="overlay-date show" id="modal-appointment">
            <div class="modal-appointment">
                <button type="button" class="btn-modal-appointment date selected">15.03.2024</button>
                <button type="button" class="btn-modal-appointment date">17.03.2024</button>
            </div>
        </div>
        <div class="overlay-time show" id="modal-appointment">
            <div class="modal-appointment">
                <button type="button" class="btn-modal-appointment time selected">15:00</button>
                <button type="button" class="btn-modal-appointment time">16:00</button>
            </div>
        </div>
        <div class="success-block overlay-success show">
            <img src="../../assets/tick-big.png" alt="success" />
            <h1>Успешно!</h1>
        </div>
    </form>
</template>
