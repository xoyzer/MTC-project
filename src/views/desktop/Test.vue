<template>
    <div>
        <button @click="fetchData">Загрузить данные</button>
        <div v-if="loading">Загрузка...</div>
        <div v-else>
            <div v-if="error">Произошла ошибка: {{ error }}</div>
            <div v-else>
                <ul>
                    <li v-for="forecast in forecasts" :key="forecast.date">
                        {{ forecast.date }} - {{ forecast.temperatureC }}°C
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {};
    },
    methods: {
        async fetchData() {
            try {
                // Замените URL ниже на URL вашего бэкенд-сервера на GitHub
                const response = await axios.get("http://localhost:5252/weatherforecast/");
                console.log(response.data); // Выводим полученные данные в консоль
                // Далее вы можете сохранить полученные данные в состоянии вашего Vue компонента или использовать их как вам нужно
            } catch (error) {
                console.error("Ошибка при отправке запроса:", error);
            }
        },
    },
};
</script>
