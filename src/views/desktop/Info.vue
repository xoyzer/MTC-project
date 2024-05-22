/info:
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
                            @focus="handleFocus"
                            @blur="handleBlur"
                            maxlength="12"
                        />
                    </label>
                    <label class="label posts-count-container">
                        <input
                            class="posts-count field"
                            type="number"
                            placeholder="Количество постов"
                            :value="displayedPostCount"
                            @input="updatePostCount"
                            @focus="handlePostCountFocus"
                            @blur="handlePostCountBlur"
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
            <div class="post-container" v-for="(post, index) in posts" :key="index">
                <div class="post-container-column">
                    <label class="label" for="">
                        <h2 class="post-count">Пост {{ index + 1 }}</h2>
                        <input
                            type="number"
                            class="post-field"
                            placeholder="Количество сотрудников"
                            v-model="post.employeesNumber"
                        />
                    </label>
                    <label class="label service-name">
                        <h4 class="post-title">Название услуги</h4>
                        <input class="post-field" v-model="post.serviceName" />
                    </label>
                    <label class="label service-duration">
                        <h4 class="post-title">Длительность услуги</h4>
                        <input class="post-field" v-model="post.serviceDuration" />
                    </label>
                    <button type="button" class="post-btn" @click="addService(index)">+ Добавить</button>
                </div>
                <div class="post-container-column">
                    <div class="service-container">
                        <h4>Услуги:</h4>
                        <div class="added-service" v-for="(service, postIndex) in post.services" :key="postIndex">
                            <button class="btn-cross" @click="removeService(index, postIndex)"></button>
                            <h4 class="added-service-info">{{ service.name }}: {{ service.duration }}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            postCount: null,
            posts: [],
            organisationFullName: "",
            address: "",
            phone: "",
            schedule: "",
        };
    },
    computed: {
        displayedPostCount() {
            return this.postCount === null ? "" : this.postCount;
        },
    },
    watch: {
        postCount(newCount) {
            this.updatePosts(newCount);
        },
    },
    methods: {
        updatePostCount(event) {
            const value = event.target.value;
            this.postCount = value === "" ? null : Number(value);
        },
        handlePostCountFocus() {
            if (this.postCount === null) {
                this.postCount = 0;
            }
        },
        handlePostCountBlur() {
            if (this.postCount === 0) {
                this.postCount = null;
            }
        },
        updatePosts(newCount) {
            const currentPosts = this.posts;
            const newPosts = [];
            for (let i = 0; i < newCount; i++) {
                if (currentPosts[i]) {
                    newPosts.push(currentPosts[i]);
                } else {
                    newPosts.push({
                        employeesNumber: "",
                        serviceName: "",
                        serviceDuration: "",
                        services: [],
                    });
                }
            }
            this.posts = newPosts;
            this.saveServicesToStorage();
        },
        addService(index) {
            const post = this.posts[index];
            if (post.serviceName.trim() === "" || post.serviceDuration.trim() === "" || post.employeesNumber === "") {
                alert("Пожалуйста, заполните все обязательные поля");
                return;
            }

            post.services.push({
                name: post.serviceName,
                duration: post.serviceDuration,
                employeesNumber: post.employeesNumber,
            });

            post.serviceName = "";
            post.serviceDuration = "";
            post.employeesNumber = "";

            this.saveServicesToStorage();
        },
        handleFocus() {
            if (this.phone === "") {
                this.phone = "+7";
            }
        },
        handleBlur() {
            if (this.phone === "+7") {
                this.phone = "";
            }
        },
        formatTime(value) {
            let formattedValue = value.replace(/[^0-9:-]/g, "");
            formattedValue = formattedValue.replace(/^(\d{2})(\d{2})/, "$1:$2-");
            formattedValue = formattedValue.replace(/(\d{2})(?=\d{2})/g, "$1:");
            formattedValue = formattedValue.slice(0, 11);
            this.schedule = formattedValue;
        },
        removeService(postIndex, serviceIndex) {
            this.posts[postIndex].services.splice(serviceIndex, 1);
            this.saveServicesToStorage();
        },
        submitHandler() {
            const formData = {
                organisationFullName: this.organisationFullName,
                address: this.address,
                phone: this.phone,
                schedule: this.schedule,
                posts: JSON.parse(JSON.stringify(this.posts)),
            };

            this.$store.commit("SET_CONTACT_INFO_ADMIN", formData);
            this.$store.commit("SET_POST_COUNT", this.postCount);
            localStorage.setItem("contactInfo", JSON.stringify(formData));
            localStorage.setItem("postCount", this.postCount);
            this.$router.push("/account");
        },
        saveServicesToStorage() {
            localStorage.setItem("services", JSON.stringify(this.posts));
        },
        loadServicesFromStorage() {
            const savedServices = localStorage.getItem("services");
            if (savedServices) {
                this.posts = JSON.parse(savedServices);
            }
        },
    },
    created() {
        const savedContactInfo = localStorage.getItem("contactInfo");
        if (savedContactInfo) {
            const contactInfo = JSON.parse(savedContactInfo);
            this.organisationFullName = contactInfo.organisationFullName || "";
            this.address = contactInfo.address || "";
            this.phone = contactInfo.phone || "";
            this.schedule = contactInfo.schedule || "";
            this.posts = contactInfo.posts || [];
            this.postCount = contactInfo.posts ? contactInfo.posts.length : null;
        }
        this.updatePosts(this.postCount);
        this.loadServicesFromStorage();
    },
};
</script>
