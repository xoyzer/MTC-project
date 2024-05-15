<template>
    <form class="both-bars" @submit.prevent="submitHandler">
        <div class="left-side-bar">
            <div class="info-left-side">
                <h1 class="header-left-side">Заполните информацию</h1>
                <div class="block-info">
                    <label class="label" for="">
                        <input
                            class="organistation-full-name field"
                            placeholder="Полное название организации"
                            v-model="organisationFullName"
                            required
                        />
                    </label>
                    <label class="label" for="">
                        <input class="address field" placeholder="Адрес" v-model="address" required />
                    </label>
                    <label class="label" for="">
                        <input
                            class="phone field"
                            placeholder="Телефон"
                            type="tel"
                            pattern="[+0-9]*"
                            v-model="phone"
                            required
                        />
                    </label>
                    <label class="label posts-count-container">
                        <input
                            class="posts-count field"
                            type="number"
                            placeholder="Количество постов"
                            v-model="postCount"
                            required
                        />
                        <button type="button" class="btn-arrow"></button>
                    </label>
                    <label class="label" for="">
                        <input
                            class="schedule field"
                            type="text"
                            placeholder="График работы"
                            v-model="schedule"
                            required
                            @input="formatTime($event.target.value)"
                        />
                    </label>
                    <button type="submit" class="btn-continue-info" @click="togglePostVisability">Продолжить</button>
                </div>
            </div>
        </div>
        <div class="right-side-bar">
            <div class="post-container" v-for="index in postCountAsNumber" :key="index">
                <div class="post-container-column">
                    <label class="label" for="">
                        <h2 class="post-count">Пост {{ index }}</h2>
                        <input
                            type="number"
                            class="post-field"
                            placeholder="количество сотрудников"
                            v-model="employeesNumber"
                            required
                        />
                    </label>
                    <label class="label service-name">
                        <h4 class="post-title">Название услуги</h4>
                        <input class="post-field" required v-model="serviceName" />
                    </label>
                    <label class="label service-duration">
                        <h4 class="post-title">Длительность услуги</h4>
                        <input class="post-field" required v-model="serviceDuration" />
                    </label>
                    <button type="button" class="post-btn" @click="addService(index)">+ Добавить</button>
                </div>
                <div class="post-container-column">
                    <div class="service-container">
                        <h4>Услуги:</h4>
                        <div class="added-service" v-for="(post, postIndex) in posts[index]" :key="postIndex">
                            <button class="btn-cross" @click="removeService(index, postIndex)"></button>
                            <h4 class="added-service-info">{{ post.name }}: {{ post.duration }}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            postCount: null,
            posts: [],
            organisationFullName: "",
            address: "",
            phone: "",
            schedule: "",
            serviceName: "",
            serviceDuration: "",
            employeesNumber: "",
        };
    },
    computed: {
        postCountAsNumber() {
            const count = parseInt(this.postCount);
            return isNaN(count) ? 0 : count;
        },
    },
    methods: {
        addService(index) {
            const nameInput = document.querySelector(`.post-container:nth-child(${index}) .service-name input`);
            const durationInput = document.querySelector(`.post-container:nth-child(${index}) .service-duration input`);

            if (nameInput.value.trim() === "" || durationInput.value.trim() === "") {
                alert("Пожалуйста, заполните все обязательные поля");
                return;
            }

            const name = nameInput.value;
            const duration = durationInput.value;
            if (!this.posts[index]) {
                this.posts[index] = [];
            }

            this.posts[index].push({ name, duration });

            nameInput.value = "";
            durationInput.value = "";
        },
        formatTime(value) {
            let formattedValue = value.replace(/[^0-9:-]/g, "");
            formattedValue = formattedValue.replace(/^(\d{2})(\d{2})/, "$1:$2-");
            formattedValue = formattedValue.replace(/(\d{2})(?=\d{2})/g, "$1:");
            formattedValue = formattedValue.slice(0, 11);
            this.schedule = formattedValue; // обновляем значение графика работы
        },

        removeService(index, postIndex) {
            this.posts[index].splice(postIndex, 1);
        },
        submitHandler() {
            const formData = {
                organisationFullName: this.organisationFullName,
                address: this.address,
                phone: this.phone,
                schedule: this.schedule,
                posts: JSON.parse(JSON.stringify(this.posts)),
                employeesNumber: this.employeesNumber,
            };
            console.log(formData);
            this.$router.push("/account");
        },
    },
};
</script>
