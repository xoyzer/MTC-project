<template>
    <form @submit.prevent="submitHandler">
        <header class="cart-header">
            <h1>Корзина</h1>
            <router-link to="/userLogin">
                <button class="btn-return-cart">Вернуться</button>
            </router-link>
        </header>
        <main class="cart-main">
            <div class="cart-main-column">
                <h3>Выбранные услуги:</h3>
                <div v-for="(service, index) in selectedServices" :key="index" class="selected-cart-service">
                    <div class="selected-service">
                        <button @click="removeService(service)">
                            <img src="@/assets/cross.png" alt="cross" />
                        </button>
                        <h3>{{ service.name }}</h3>
                    </div>
                </div>
            </div>
            <div class="cart-main-column" v-if="!isServiceListVisible">
                <a href="#" @click="toggleServiceList">+Добавить услугу</a>
            </div>
            <div class="cart-main-column goods" :class="{ show: isServiceListVisible }">
                <h2>Добавьте услуги:</h2>
                <div class="good-container">
                    <div v-for="(service, index) in availableServices" :key="index" class="service-item">
                        <span>{{ service.name }}</span>
                        <button @click="toggleService(service)" class="btn-plus">
                            <img v-if="!isSelected(service)" src="@/assets/plus.png" alt="plus" />
                            <img v-else src="@/assets/tick.png" alt="tick" />
                        </button>
                    </div>
                </div>
                <button class="btn-swipe-cart" @click="swipeCart">
                    <img src="../../assets/arrow-right-goods.png" alt="arrow-button" />
                    <img src="../../assets/arrow-right-goods.png" alt="arrow-button" />
                </button>
            </div>
        </main>
        <footer class="cart-footer">
            <h1>Выбрано услуг: {{ selectedServices.length }}</h1>
            <button class="btn-go" @click="goToAppointment">
                <p>Перейти к записи</p>
                <img src="@/assets/arrow-right.png" alt="arrow-right" />
            </button>
        </footer>
    </form>
</template>

<script>
import { mapMutations } from "vuex";
export default {
    data() {
        return {
            isServiceListVisible: false,
            availableServices: [
                { name: "Мойка ковриков", selected: false },
                { name: "Шиномонтаж", selected: false },
                { name: "Дошиповка", selected: false },
                { name: "Автомойка", selected: false },
            ],
            selectedServices: [],
        };
    },
    methods: {
        ...mapMutations({
            setSelectedServices: "SET_SELECTED_SERVICES",
        }),
        toggleServiceList() {
            this.isServiceListVisible = !this.isServiceListVisible;
            if (!this.isServiceListVisible) {
                const element = document.querySelector(".cart-main-column.goods");
                element.classList.remove("show");
            }
        },
        swipeCart() {
            this.isServiceListVisible = false;
        },
        isSelected(service) {
            return this.selectedServices.includes(service);
        },
        toggleService(service) {
            if (!this.isSelected(service)) {
                service.selected = true;
                this.selectedServices.push(service);
            } else {
                this.removeService(service);
            }
        },
        removeService(service) {
            service.selected = false;
            const index = this.selectedServices.indexOf(service);
            if (index !== -1) {
                this.selectedServices.splice(index, 1);
            }
        },
        goToAppointment() {
            if (this.selectedServices.length > 0) {
                const formData = {
                    selectedServices: JSON.parse(JSON.stringify(this.selectedServices)),
                };
                console.log(formData);
                this.setSelectedServices(this.selectedServices);
                this.$router.push("/appointment");
            }
        },
    },
};
</script>
