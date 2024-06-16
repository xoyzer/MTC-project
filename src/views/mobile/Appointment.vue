<template>
    <form class="appointment-form" @submit.prevent="submitHandler">
        <header class="appointment-header">
            <button type="button" class="btn-back-appointment" @click="backToCart">
                <img src="../../assets/exit.png" alt="exit" />
            </button>
            <h1>Запись на услугу</h1>
        </header>
        <main class="appointment-main">
            <div class="appointment-container-first">
                <label class="appointment-date-time">
                    <h3>Выберете дату:</h3>
                    <input class="appointment-input date" type="text" v-model="selectedDate" disabled required />
                    <button type="button" class="btn-appointment-arrow" @click="toggleDateOverlay">
                        <img src="../../assets/appointment-arrow.png" alt="arrow-down" />
                    </button>
                </label>
                <label class="appointment-date-time">
                    <h3>Выберете время:</h3>
                    <input class="appointment-input time" type="text" v-model="selectedTime" disabled required />
                    <button type="button" class="btn-appointment-arrow" @click="toggleTimeOverlay">
                        <img src="../../assets/appointment-arrow.png" alt="arrow-down" />
                    </button>
                </label>
            </div>
            <div class="appointment-container-second">
                <h3>Информация об автомобиле</h3>
                <div class="appointment-block">
                    <label class="appointment-info-container">
                        <input
                            class="input-appointment-info-container highlighted"
                            placeholder="Год Выпуска *"
                            v-model="year"
                            type="number"
                            required
                            @input="year = $event.target.value.slice(0, 4).replace(/\D/g, '')"
                        />
                        <button type="button" class="btn-appointment-arrow">
                            <img src="../../assets/appointment-arrow.png" alt="arrow-down" />
                        </button>
                    </label>
                    <label class="appointment-info-container" for="">
                        <input
                            class="input-appointment-info-container highlighted"
                            type="text"
                            placeholder="Марка *"
                            v-model="mark"
                        />
                        <button type="button" class="btn-appointment-arrow">
                            <img src="../../assets/appointment-arrow.png" alt="arrow-down" />
                        </button>
                    </label>
                    <label class="appointment-info-container" for="">
                        <input
                            class="input-appointment-info-container highlighted"
                            type="text"
                            placeholder="Модель *"
                            v-model="carModel"
                        />
                        <button type="button" class="btn-appointment-arrow">
                            <img src="../../assets/appointment-arrow.png" alt="arrow-down" />
                        </button>
                    </label>
                    <label class="appointment-info-container" for="stateNumber">
                        <input
                            id="stateNumber"
                            class="input-appointment-info-container highlighted state-number"
                            type="text"
                            placeholder="Гос номер *"
                            required
                            v-model="stateNumber"
                            @input="formatStateNumber"
                        />
                        <button type="button" class="btn-appointment-arrow"></button>
                    </label>
                </div>
            </div>
        </main>
        <footer class="appointment-footer">
            <button :class="{ 'btn-appointment': true, unlocked: isFormValid }" :disabled="!isFormValid">
                Записаться
            </button>
        </footer>
        <div class="overlay-date" id="modal-appointment" @click="hideOverlay('date')">
            <button type="button" class="btn-modal-appointment date selected" @click="selectDate('15.03.2024')">
                15.03.2024
            </button>
            <button type="button" class="btn-modal-appointment date" @click="selectDate('17.03.2024')">
                17.03.2024
            </button>
        </div>
        <div class="overlay-time" id="modal-appointment" @click="hideOverlay('time')">
            <button type="button" class="btn-modal-appointment time selected" @click="selectTime('15:00')">
                15:00
            </button>
            <button type="button" class="btn-modal-appointment time" @click="selectTime('16:00')">16:00</button>
        </div>
        <div class="success-block">
            <img src="../../assets/tick-big.png" alt="success" />
            <h1>Успешно!</h1>
        </div>
    </form>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    data() {
        return {
            selectedDate: "",
            selectedTime: "",
            year: "",
            carModel: "",
            mark: "",
            stateNumber: "",
            success: false,
        };
    },
    computed: {
        ...mapState(["selectedServices"]),
        isFormValid() {
            return (
                this.selectedDate !== "" &&
                this.selectedTime !== "" &&
                this.year !== "" &&
                this.carModel !== "" &&
                this.mark !== "" &&
                this.stateNumber !== ""
            );
        },
    },
    methods: {
        toggleDateOverlay() {
            const overlay = document.querySelector(".overlay-date");
            overlay.classList.toggle("show");
        },
        toggleTimeOverlay() {
            const overlay = document.querySelector(".overlay-time");
            overlay.classList.toggle("show");
        },
        selectDate(date) {
            this.selectedDate = date;
            this.toggleDateOverlay();
        },
        selectTime(time) {
            this.selectedTime = time;
            this.toggleTimeOverlay();
        },
        hideOverlay(type) {
            const target = event.target;
            if (!target.closest(".btn-modal-appointment")) {
                const overlayClass = type === "date" ? ".overlay-date" : ".overlay-time";
                const overlay = document.querySelector(overlayClass);
                overlay.classList.remove("show");
            }
        },
        backToCart() {
            this.$router.push("/cart");
        },
        ...mapMutations(["SET_APPOINTMENT_INFO"]),
        submitHandler() {
            const formData = {
                selectedDate: this.selectedDate,
                selectedTime: this.selectedTime,
                year: this.year,
                carModel: this.carModel,
                mark: this.mark,
                stateNumber: this.stateNumber,
            };
            this.SET_APPOINTMENT_INFO(formData);
            const successBlock = document.querySelector(".success-block");
            successBlock.classList.add("show");

            setTimeout(() => {
                this.$router.push("/orders");
            }, 500);
        },
    },
};
</script>
