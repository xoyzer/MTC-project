<template>
    <router-view />
</template>

<script>
export default {
    // computed: {
    //     layout() {
    //         console.log(this.$route.meta);
    //         return "empty-layout";
    //     },
    // },
    // components: {
    //     EmptyLayout,
    // },
};
</script>

<style>
@font-face {
    font-family: "Inter Regular";
    src: url("/src/fonts/Inter-Regular.ttf");
}

* {
    box-sizing: border-box;
    font-family: Inter Regular;
}

body {
    margin: 0 auto;
    padding: 0 auto;
    overflow-x: hidden;
}

ul,
ul,
li {
    list-style-type: none;
    margin: 0;
}

a {
    text-decoration: none;
    font-size: Inter Regular;
}

.info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
    gap: 10px;
    height: 100%;
}

.block {
    width: 478px;
    height: 63px;
    background-color: #f6f6f6;
    border-radius: 2px;
    border-width: 1px;
    padding: 20px;
    font-size: 20px;
}

.email {
    background-image: url("/src/assets/email.png");
    background-repeat: no-repeat;
    background-position: 4% center;
    padding-left: 50px;
}

.password-container {
    position: relative;
}

.password {
    background-image: url("/src/assets/lock-01.png");
    background-repeat: no-repeat, no-repeat;
    background-position: 4% center; /* Расположение первой и второй картинок */
    padding-right: 50px;
    padding-left: 50px;
}

h3 {
    color: #076289;
    margin: 0;
    margin-bottom: 10px;
}

h4 {
    font-weight: 500;
}

.header {
    font-size: 48px;
    margin: 10px auto;
    padding: 0 auto;
    text-align: center;
}

.info-left-side {
    margin-top: 30px;
    display: flex;
}

.left-side-bar {
    width: 620px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative; /* Добавляем position: relative, чтобы можно было позиционировать разделяющую линию */
}

.left-side-bar::after {
    content: "";
    position: absolute;
    top: 0;
    right: -10px; /* Расстояние от правого края */
    height: 100%; /* Высота равная высоте родительского элемента */
    width: 11px; /* Ширина линии */
    background-color: #96d3ff; /* Цвет линии */
}

.block-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
}

.both-bars {
    display: flex;
    justify-content: center;
}

.right-side-bar {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 820px;
    gap: 30px;
}

.post-container {
    width: 668px;
    height: 367px;
    border: 1px solid black;
    display: flex;
    gap: 200px;
}

.post-container-column {
    margin-left: 20px;
}

.address {
    background-image: url("/src/assets/map.png");
    background-repeat: no-repeat;
    background-position: 4% center;
    padding-left: 50px;
}

.phone {
    background-image: url("/src/assets/phone.png");
    background-repeat: no-repeat;
    background-position: 4% center;
    padding-left: 50px;
}

.schedule {
    background-image: url("/src/assets/watch.png");
    background-repeat: no-repeat;
    background-position: 4% center;
    padding-left: 50px;
}

.added-service {
    display: flex;
    background-color: #d9d9d9;
    border-radius: 5px;
    margin-bottom: 20px;
    align-items: center;
    padding: 0px 20px 0px 0px;
    font-size: 13px;
}

.service-container {
    display: inline-block;
}

.navigation {
    background-color: #6c7072;
    display: flex;
    align-items: center; /* Центрируем содержимое по вертикали */
    justify-content: center;
    height: 101px;
}

.navigation-ul {
    display: flex;
    justify-content: center;
    align-items: center;
    /* gap: 230px; */
}

.navigation > ul {
    padding: 0;
}

.navigation > ul > li {
    margin-left: 10px;
    margin-right: 100px;
}

.navigation-a {
    color: white;
    font-size: 32px;
    display: flex;
    align-items: center;
}

.analytics {
    font-size: 48px;
}

.avatar-container {
    display: flex;
    flex-direction: column;
    width: 320px;
    align-items: center;
    gap: 10px;
    margin-right: 0;
}

.avatar-picture {
    background-image: url("./assets/avatar.png");
    width: 320px;
    height: 320px;
}

.info-container {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
}

.active-post-container {
    display: flex;
    justify-content: center;
    margin-bottom: 200px;
    gap: 50px;
    word-wrap: break-word;
    white-space: pre-wrap;
}

.post-header-container {
    text-align: center;
    margin-top: 150px;
    margin-bottom: 20px;
    font-size: 40px;
}

.post-header {
    font-size: 40px;
    text-align: center;
}

.active-post {
    width: 420px;
    height: 565px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    overflow-x: hidden;
}

.post-info {
    background: #d9d9d9;
    font-size: 20px;
    padding: 10px;
    width: 204px;
    height: 45px;
    margin: 0;
    margin-bottom: 30px;
    word-wrap: break-word;
    white-space: pre-wrap;
}

.orders-container {
    width: 1393px;
    height: 232px;
    border: 1px solid black;
    border-radius: 8px;
    margin-bottom: 20px;
    padding-right: 10px;
    overflow-y: hidden;
}

.order {
    margin-bottom: 500px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.order-row {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-right: 0;
    width: 1393px;
    word-wrap: break-word;
    white-space: pre-wrap;
}

.order-row > p {
    margin: 0px;
    margin-left: 20px;
    font-size: 24px;
    word-wrap: break-word;
}

.order-row > div {
    margin: 0;
}

h1 {
    font-weight: 500;
}

.sort-row {
    display: flex;
    align-items: center;
    font-size: 24px;
}

.sort-row > ul {
    display: flex;
    gap: 40px;
}

.sort-row > ul > li > a {
    color: #2f43af;
}

.order-info {
    font-size: 40px;
    margin: 0;
}

.order-row > img {
    margin: 0 0 50px 10px;
}

.orders-history-container {
    margin-left: 100px;
    margin-bottom: 200px;
}

.orders-history {
    width: 794px;
    height: 167px;
    border: 1px solid black;
    font-size: 24px;
    display: flex;
    justify-content: space-between;
    border-radius: 8px;
    margin-bottom: 20px;
    overflow-y: hidden;
}

.order-history-column-info {
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 0;
}

.order-history-column-info > p {
    margin-top: 10px;
    margin-bottom: 10px;
}

.success-container {
    width: 154px;
    height: 38px;
    background-color: #54e574;
    text-align: center;
}

.cancel-container {
    width: 154px;
    height: 38px;
    background-color: #f8645b;
    text-align: center;
}

.order-time {
    background-color: #d9d9d9;
    padding: 10px 25px;
    font-size: 24px;
}

.contact-info {
    /* display: flex;
    flex-direction: column; */
    margin-left: 0;
}

.contact-info-title {
    font-weight: 500;
    margin-bottom: 15px;
    font-size: 32px;
}

.selected-service {
    background-color: #d9d9d9;
    font-size: 24px;
    padding: 10px 10px;
    margin: 0;
    white-space: pre;
}

.selected-service-container {
    display: flex;
    gap: 20px;
}

.btn-eye {
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    border: none;
    cursor: pointer;
    background-color: transparent;
}

.btn-accept {
    width: 243px;
    height: 83px;
    background-color: #b0f2ba;
    font-size: 24px;
    border-radius: 20px;
}

.btn-cancel {
    width: 243px;
    height: 83px;
    font-size: 24px;
    background-color: #fea0a0;
    border-radius: 20px;
}

.btn-waiting {
    width: 243px;
    height: 83px;
    font-size: 24px;
    background-color: #7ae5b9;
    border-radius: 20px;
}

.btn-contact-info {
    width: 373px;
    height: 53px;
    background-color: #80d1ff;
    border-radius: 25px;
    font-size: 20px;
}

.btn-exit {
    width: 257px;
    height: 88px;
    background-color: #fbacac;
    font-size: 32px;
    border-radius: 26px;
    margin-left: 150px;
    margin-bottom: 300px;
}

.btn-avatar {
    width: 245px;
    height: 53px;
    background-color: #bcd4e2;
    border-radius: 25px;
    font-size: 20px;
}

.post-btn {
    width: 122px;
    height: 27px;
    background-color: black;
    color: white;
    margin-top: 20px;
}

.btn-cross {
    width: 36px;
    height: 27px;
    background-image: url("./assets/cross.png");
    background-color: #d9d9d9;
}

.post-field {
    width: 226px;
    height: 28px;
    text-align: center;
    font-size: 16px;
}

.field {
    width: 490px;
    height: 61px;
    font-size: 24px;
    border-width: 1px;
    padding-left: 50px;
}

.posts-count-container {
    position: relative;
}

.posts-count {
    padding-left: 50px;
    background-image: url("/src/assets/post.png");
    background-repeat: no-repeat;
    background-position: 4% center;
    text-align: center;
}

.btn-arrow {
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 100%;
    background-image: url("/src/assets/arrow.png");
    background-repeat: no-repeat;
    background-position: center;
    border: none;
    cursor: pointer;
    background-color: transparent;
}

.field:first-child {
    padding-left: 10px;
}

.container-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    gap: 100px;
}

.sign-up-button {
    width: 608px;
    height: 111px;
    background-color: black;
    color: white;
    font-size: 48px;
    margin-bottom: 20px;
}

.sign-in-button {
    width: 318px;
    height: 95px;
    background-color: #58b9e2;
    font-size: 40px;
    color: black;
    border-radius: 20px;
}

.btn-continue {
    width: 468px;
    height: 72px;
    margin-top: 20px;
    font-size: 32px;
    background-color: #a1c1f0;
}

button {
    border: 0px;
    cursor: pointer;
    background-color: white;
}

.footer {
    margin-top: 250px;
}
</style>
