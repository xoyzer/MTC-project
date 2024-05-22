<template>
    <label class="map-search-container">
        <h1>Выберете удобное место</h1>
        <input class="map-input" type="search" v-model="searchQuery" @input="searchPlaces" />
    </label>
    <div class="map" id="map" style="width: 360px; height: 459px"></div>
</template>

<script>
export default {
    data() {
        return {
            searchQuery: "",
        };
    },
    mounted() {
        const script = document.createElement("script");
        script.src = "https://api-maps.yandex.ru/v3/?apikey=e2aeb5ee-74a9-4be3-9812-fd9392bb19b4&lang=ru_RU";
        script.async = true;
        script.onload = () => {
            this.initMap();
        };
        document.head.appendChild(script);
    },
    methods: {
        async initMap() {
            await ymaps3.ready;
            const { YMap, YMapDefaultSchemeLayer } = ymaps3;

            const map = new YMap(
                document.getElementById("map"),

                {
                    location: {
                        // Координаты центра карты
                        center: [37.588144, 55.733842],

                        // Уровень масштабирования
                        zoom: 10,
                    },
                }
            );
            map.addChild(new YMapDefaultSchemeLayer());
        },
    },
};
</script>
