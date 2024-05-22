<template>
    <header class="user-orders-header">
        <h1>Ваши заказы:</h1>
    </header>
    <main class="user-orders-main">
        <div class="user-order">
            <p>Запись: {{ appointmentInfo.selectedDate }} {{ appointmentInfo.selectedTime }}</p>
            <button class="btn-more-user" @click="toggleMoreOverlay">
                <p>Подробнее</p>
                <img
                    :src="
                        moreOverlayOpen
                            ? require('../../assets/arrow-up.png')
                            : require('../../assets/appointment-arrow.png')
                    "
                    alt="arrow"
                />
            </button>
        </div>
        <div class="order-more">
            <p>Услуги:</p>
            <ul class="ul-services">
                <li v-for="(service, index) in selectedServices" :key="index">{{ service.name }}</li>
            </ul>
            <p>Информация:</p>
            <ul class="ul-car-info">
                {{
                    appointmentInfo.mark
                }}
                {{
                    appointmentInfo.carModel
                }}
                {{
                    appointmentInfo.stateNumber
                }}
            </ul>
            <div class="order-button-container">
                <button type="button" class="btn-order-full confirmed">
                    <p>Подтверждено</p>
                    <img src="../../assets/tick.png" alt="tick" />
                </button>
                <button type="button" class="btn-order-full cancel" @click="cancelOrder">Отменить заказ</button>
            </div>
        </div>
    </main>
    <footer class="orders-footer-user">
        <button type="button" class="btn-order-user more" @click="orderMore">Изменить заказ</button>
        <button type="button" class="btn-order-user-exit" @click="logOut">Выйти</button>
    </footer>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    data() {
        return {
            moreOverlayOpen: false,
        };
    },
    computed: {
        ...mapState(["selectedServices"]),
        ...mapState(["appointmentInfo"]),
    },
    methods: {
        ...mapMutations(["RESET_SELECTED_SERVICES", "RESET_APPOINTMENT_INFO"]),
        orderMore() {
            this.$router.push("/cart");
        },
        logOut() {
            this.$router.push("/login");
        },
        toggleMoreOverlay() {
            const overlay = document.querySelector(".order-more");
            overlay.classList.toggle("show");
            this.moreOverlayOpen = !this.moreOverlayOpen;
        },
        cancelOrder() {
            this.RESET_SELECTED_SERVICES();
            this.RESET_APPOINTMENT_INFO();
            const orderContainer = document.querySelector(".user-order");
            orderContainer.parentNode.removeChild(orderContainer);
            const orderMoreContainer = document.querySelector(".order-more");
            orderMoreContainer.classList.remove("show");
        },
    },
};
</script>
