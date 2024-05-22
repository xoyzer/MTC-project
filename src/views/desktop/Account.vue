/account:
<template>
    <div>
        <nav class="navigation">
            <ul class="navigation-ul">
                <li class="navigation-li">
                    <a class="navigation-a" href="#"><span class="analytics">Аналитика</span></a>
                </li>
                <li class="navigation-li"><a class="navigation-a" href="#active-posts">Посты</a></li>
                <li class="navigation-li"><a class="navigation-a" href="#orders">Заказы</a></li>
                <li class="navigation-li"><a class="navigation-a" href="#">Информация</a></li>
                <li class="navigation-li"><a class="navigation-a" href="#order-history">История</a></li>
            </ul>
        </nav>
        <header class="info-container">
            <div class="avatar-container">
                <div class="avatar-picture"></div>
                <button type="button" class="btn-avatar">Добавить аватар</button>
            </div>
            <div class="contact-info">
                <h2 class="contact-info-title">{{ contactInfo.organisationFullName }}</h2>
                <h2 class="contact-info-title">{{ contactInfo.address }}</h2>
                <h2 class="contact-info-title">{{ contactInfo.phone }}</h2>
                <h2 class="contact-info-title">{{ email }}</h2>
                <button type="button" class="btn-contact-info" @click="changeOrAddInfo">
                    Изменить/ Добавить информацию
                </button>
            </div>
            <button class="btn-exit" @click="logOut">Выйти</button>
        </header>
        <main class="main">
            <h1 id="active-posts" class="post-header-container">Активные посты</h1>
            <div class="active-post-container">
                <div v-for="(post, postIndex) in postInfo" :key="postIndex" class="active-post">
                    <h1 class="post-header">Пост {{ postIndex + 1 }}</h1>
                    <div v-for="(order, index) in post" :key="index">
                        <p class="post-info">{{ order.car }} {{ order.time }}</p>
                    </div>
                </div>
            </div>

            <h1 id="orders" class="post-header">Заказы</h1>
            <div class="order">
                <div v-for="(order, index) in activeOrders" :key="index" class="orders-container">
                    <div class="order-row">
                        <img src="../../assets/phone-call-01.png" width="24px" height="24px" alt="phone" />
                        <h4 class="order-info">{{ order.name }} {{ order.car }}</h4>
                        <h4 class="order-time">{{ order.time }}</h4>
                        <button
                            v-if="!order.isConfirmed && order.status === 'pending'"
                            @click="confirmOrder(index)"
                            class="btn-accept"
                        >
                            Подтвердить
                        </button>
                        <button v-else-if="order.isConfirmed && order.status === 'pending'" class="btn-waiting">
                            Ожидание
                        </button>
                        <button @click="cancelOrder(index)" class="btn-cancel">Отменить заказ</button>
                    </div>
                    <div class="order-row">
                        <p>Выбранные услуги:</p>
                        <div v-for="(service, i) in order.services" :key="i">
                            <h4 class="selected-service-account">{{ service }}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <h1 id="order-history" class="post-header">История заказов</h1>
            <div class="orders-history-container">
                <div class="sort-row">
                    <p>Сортировка:</p>
                    <ul>
                        <li>
                            <a href="#" @click.prevent="sortHistory('date')">
                                По дате
                                <img src="../../assets/chevron-down.png" width="24px" height="24px" alt="chevron" />
                            </a>
                        </li>
                        <li>
                            <a href="#" @click.prevent="sortHistory('services')">
                                По услугам
                                <img src="../../assets/chevron-down.png" width="24px" height="24px" alt="chevron" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div v-for="(order, index) in orderHistory" :key="index" class="orders-history">
                    <div class="order-history-column-info">
                        <p>{{ order.time }}</p>
                        <p>{{ order.name }} {{ order.car }}</p>
                        <div class="selected-service-container">
                            <div v-for="(service, i) in order.services" :key="i">
                                <h4 class="selected-service-account">{{ service }}</h4>
                            </div>
                        </div>
                    </div>
                    <div class="order-history-column-info">
                        <p>Статус:</p>
                        <div
                            :class="{
                                'success-container': order.status === 'confirmed',
                                'cancel-container': order.status === 'cancelled',
                            }"
                        >
                            {{ order.statusText }}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeOrders: [
                {
                    name: "Алексей",
                    car: "A000AA96 Lamborghini Aventador, 2018",
                    time: "17.03.2024 16:00",
                    services: ["Мойка", "Химчистка"],
                    status: "pending",
                    isConfirmed: false,
                    statusText: "Ожидание подтверждения",
                    carInfo: "Lamborghini Aventador, 2018",
                },
            ],
            orderHistory: [],
            sortKey: "date",
            sortOrder: 1,
        };
    },
    computed: {
        email() {
            return this.$store.state.email;
        },
        contactInfo() {
            return this.$store.state.contactInfoAdmin;
        },
        postCount() {
            return this.$store.state.postCount;
        },
        postInfo() {
            // Если contactInfo.posts не определен, вернуть пустой массив
            if (!this.contactInfo || !this.contactInfo.posts) {
                return [];
            }

            const posts = Array(this.contactInfo.posts.length)
                .fill()
                .map(() => []);

            this.activeOrders.forEach((order, index) => {
                const postIndex = Math.floor(index / 5);
                if (postIndex < posts.length) {
                    posts[postIndex].push(order);
                }
            });

            return posts;
        },
    },
    created() {
        const savedEmail = localStorage.getItem("email");
        if (savedEmail) {
            this.$store.commit("SET_ADMIN_EMAIL", savedEmail);
        }
        const savedContactInfo = localStorage.getItem("contactInfo");
        if (savedContactInfo) {
            const contactInfo = JSON.parse(savedContactInfo);
            console.log("Loaded contactInfo:", contactInfo); // Отладка
            this.$store.commit("SET_CONTACT_INFO_ADMIN", contactInfo);
        }
        const savedActiveOrders = localStorage.getItem("activeOrders");
        if (savedActiveOrders) {
            this.activeOrders = JSON.parse(savedActiveOrders);
            console.log("Loaded activeOrders:", this.activeOrders); // Отладка
        }
        const savedOrderHistory = localStorage.getItem("orderHistory");
        if (savedOrderHistory) {
            this.orderHistory = JSON.parse(savedOrderHistory);
        }
    },

    methods: {
        changeOrAddInfo() {
            this.$router.push("/info");
        },
        logOut() {
            localStorage.removeItem("email");
            localStorage.removeItem("contactInfo");
            localStorage.removeItem("activeOrders");
            localStorage.removeItem("orderHistory");
            this.$store.commit("LOGOUT");
            this.$router.push("/adminRegister");
        },
        confirmOrder(index) {
            this.activeOrders[index].isConfirmed = true;
            this.activeOrders[index].statusText = "Подтверждено";
            this.saveActiveOrdersToStorage();
        },
        cancelOrder(index) {
            const order = this.activeOrders.splice(index, 1)[0];
            order.status = "cancelled";
            order.statusText = "Отменён";
            this.orderHistory.push(order);
            this.saveActiveOrdersToStorage();
            this.saveOrderHistoryToStorage();
            this.sortOrderHistory();
        },
        sortHistory(key) {
            if (this.sortKey === key) {
                this.sortOrder = -this.sortOrder;
            } else {
                this.sortKey = key;
                this.sortOrder = 1;
            }
            this.sortOrderHistory();
        },
        sortOrderHistory() {
            if (this.sortKey === "date") {
                this.orderHistory.sort((a, b) => {
                    return (new Date(a.time) - new Date(b.time)) * this.sortOrder;
                });
            } else if (this.sortKey === "services") {
                this.orderHistory.sort((a, b) => {
                    return (a.services.length - b.services.length) * this.sortOrder;
                });
            }
        },
        saveActiveOrdersToStorage() {
            localStorage.setItem("activeOrders", JSON.stringify(this.activeOrders));
        },
        saveOrderHistoryToStorage() {
            localStorage.setItem("orderHistory", JSON.stringify(this.orderHistory));
        },
    },
    watch: {
        activeOrders: {
            handler() {
                this.sortOrderHistory();
            },
            deep: true,
        },
        sortKey: {
            handler() {
                this.sortOrderHistory();
            },
        },
        "$store.state.contactInfoAdmin": {
            handler(newInfo) {
                this.contactInfo = newInfo;
            },
            immediate: true,
            deep: true,
        },
    },
};
</script>
