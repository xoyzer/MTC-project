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

@font-face {
    font-family: "Inter Bold";
    src: url("/src/fonts/Inter-Bold.ttf");
}

@font-face {
    font-family: "Inter Medium";
    src: url("/src/fonts/Inter-Medium.ttf");
}

@font-face {
    font-family: "Poppins Medium";
    src: url("/src/fonts/Poppins-Medium.ttf");
}

@font-face {
    font-family: "Poppins SemiBold";
    src: url("/src/fonts/Poppins-SemiBold.ttf");
}

@font-face {
    font-family: "Manrope Bold";
    src: url("/src/fonts/Manrope-Bold.ttf");
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
    margin-top: 10px;
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
    margin: 0;
}

h4 {
    font-weight: 500;
}

.header {
    font-size: 48px;
    margin: 10px auto;
    padding: 0 auto;
    margin-bottom: 80px;
    text-align: center;
}

.header-left-side {
    font-size: 48px;
    margin-bottom: 10px;
    margin: 0 0 50px 0;
}

.info-left-side {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
}

.left-side-bar {
    width: 720px;
    min-height: 100vh;
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
    bottom: 0;
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
}

.right-side-bar {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 820px;
    gap: 30px;
}

/* .post-container.show {
    display: flex;
} */

.post-container {
    display: flex;
    width: 668px;
    height: 367px;
    border: 1px solid black;
    gap: 100px;
    overflow-x: hidden;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

button {
    border: 0px;
    cursor: pointer;
    background-color: white;
    text-decoration: none;
    background-color: transparent;
}

.post-container-column {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
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
    padding: 0 10px 0 50px;
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

.added-service > h4 {
    font-weight: 600;
}

.service-container {
    display: inline-block;
}

.navigation {
    background-color: #6c7072;
    display: flex;
    align-items: center; /* Центрируем содержимое по вертикали */
    justify-content: space-around;
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
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 200px;
    gap: 50px;
    word-wrap: break-word;
    white-space: pre-wrap;
    padding: 0 50px;
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
    flex: 1 1 1 1;
    min-width: 420px;
    min-height: 565px;
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
    margin: 0;
    margin-bottom: 30px;
    word-wrap: break-word;
    white-space: pre-wrap;
}

.orders-container {
    width: 1393px;
    min-height: 232px;
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
    margin-bottom: 20px;
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

h1,
h2,
h3,
h4 {
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
    width: 618px;
    text-align: justify;
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
    padding-right: 20px;
    margin-top: 0;
    padding-bottom: 10px;
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

.selected-service-account {
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

.login-to-application-header {
    font-family: Inter Regular;
    font-size: 12px;
    color: #4197e7;
}

.map-search-container {
    width: 360px;
    height: 181px;
    background-color: #c7d3ff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
}

.map-search-container h1 {
    font-family: Inter Medium;
    font-size: 16px;
    text-align: center;
    margin: 30px 0 50px 0;
}

.map-input {
    width: 320px;
    height: 53px;
    background-image: url("./assets/map2.png");
    background-repeat: no-repeat;
    background-position: 4% center;
    padding: 0 10px 0 40px;
    border-radius: 10px;
    margin-bottom: 20px;
}

.map {
    width: 360px;
    height: 459px;
    margin: 0 auto;
}

.appointment-header {
    display: flex;
    justify-content: center;
    gap: 10px;
}

.appointment-header h1 {
    font-family: Inter Medium;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    margin: 5px 0 10px 0;
}

.appointment-main {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.appointment-container-first {
    width: 320px;
    height: 212px;
    border: 2px solid #2788e2;
    border-radius: 10px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    gap: 50px;
}

.appointment-container-second {
    width: 320px;
    height: 283px;
    border: 2px solid #2788e2;
    border-radius: 10px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    gap: 10px;
    overflow-x: hidden;
}

.appointment-container-second h3 {
    font-size: 14px;
    margin-bottom: 10px;
}

.appointment-block {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.appointment-block:first-child {
    background: black;
}

.appointment-info-container {
    position: relative;
}

.appointment-date-time {
    position: relative;
}

.input-appointment-info-container {
    width: 180px;
    height: 37px;
    padding: 0 5px;
    border: none;
    border-radius: 5px;
    background: #f8f5f5;
    font-size: 14px;
    padding: 0 30px 0 10px;
}

.input-appointment-info-container.highlighted::placeholder {
    color: #000000;
}

.appointment-date-time h3 {
    text-align: center;
    font-family: Inter Medium;
    font-size: 14px;
    color: #989898;
    margin-bottom: 5px;
}

.appointment-input {
    width: 309px;
    height: 35px;
    border: 2px solid #2788e2;
    border-radius: 15px;
    background-repeat: no-repeat;
    background-position: 4% center;
    padding: 0 40px;
    font-family: Inter Medium;
    font-size: 14px;
    color: #000000;
}

.appointment-input.date {
    background-image: url("./assets/calendar.png");
}

.appointment-input.time {
    background-image: url("./assets/watch (2).png");
}

.appointment-footer {
    margin: 0 auto;
    display: flex;
    justify-content: center;
}

.appointment-form {
    position: relative;
}

#modal-appointment {
    width: 320px;
    margin: 0 auto;
}

.overlay-date.show {
    display: flex;
}
.overlay-time.show {
    display: flex;
}

.overlay-date,
.overlay-time {
    display: none;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    border-radius: 8px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.3);
}

.success-block.show {
    display: flex;
}

.success-block {
    display: none;
    width: 282px;
    height: 259px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    background: #0cff50;
    margin: 0 auto;
    border-radius: 15px;
}

.btn-modal-appointment.selected {
    /* background: #b0d6e5; */
    color: #000000;
}

.btn-modal-appointment {
    width: 320px;
    height: 32px;
    text-align: center;
    font-family: Inter Medium;
    font-size: 14px;
    background: white;
    color: #19181a;
    border: 1px solid #2788e2;
}

.btn-modal-appointment:active {
    background: #b0d6e5;
}

.cart-header {
    display: flex;
    justify-content: center;
    margin: 10px 20px;
    gap: 120px;
}

.cart-header h1 {
    font-family: Inter Medium;
    font-size: 16px;
}

.cart-main {
    margin: 0 auto;
    width: 360px;
    height: 488px;
    border: 1px solid #859bec;
    border-radius: 10px;
    overflow-x: hidden;
    display: flex;
    justify-content: space-between;
}

.cart-main-column.goods.show {
    display: flex;
}

.cart-main-column h3 {
    font-family: Inter Medium;
    font-size: 13px;
}

.cart-main-column h2 {
    font-family: Inter Medium;
    font-size: 15px;
    margin: 0;
}

.cart-main-column.goods {
    display: none;
}

.cart-main-column {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 5px;
}

.cart-main-column a {
    /* display: none; */

    color: #1843dd;
    font-family: Inter Medium;
    font-size: 13px;
    margin: 0;
}

.cart-main-column.goods {
    border: 2px solid #0085ff;
    border-radius: 10px 0 0 10px;
    width: 221px;
    margin: 0;
    padding: 5px 10px 0 10px;
}

.cart-main-column.goods span {
    font-family: Inter Medium;
    font-size: 13px;
}

.service-item {
    border-bottom: 1px solid #e4e6ec;
    display: flex;
    justify-content: space-between;
}

/* .good-container li {
    border-bottom: 1px solid #e4e6ec;
    display: flex;
    justify-content: space-between;
} */

.good-container {
    display: flex;
    flex-direction: column;
    margin: 0 10px;
    gap: 10px;
}

.btn-swipe-cart {
    margin: 40px 0 0 0;
    padding: 0;
    width: 25px;
}

.arrow-right-goods {
    /* background-image: url("./assets/arrow-right-goods.png");
    background-repeat: no-repeat;*/
}

.cart-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding: 10px 10px;
    gap: 50px;
}

.cart-footer h1 {
    font-family: Inter Medium;
    font-size: 14px;
}

.user-orders-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 360px;
    height: 435px;
    overflow-x: hidden;
    border: 1px solid #0038ff;
    border-radius: 5px;
    margin: 0 auto;
    gap: 5px;
}

.user-orders-header {
    text-align: center;
}

.user-order {
    width: 348px;
    height: 44px;
    border: 2px solid #2788e2;
    border-radius: 10px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    font-size: 14px;
    padding: 0 0 0 10px;
    gap: 30px;
}

.user-orders-header h1 {
    font-size: 20px;
}

.order-more.show {
    display: block;
}

.order-more {
    display: none;
    width: 337px;
    height: 231px;
    border: 1px solid #0c2c7e;
    border-radius: 10px;
    padding: 0 0 20px 20px;
    overflow-x: hidden;
}
.ul-services {
    padding-left: 35px;
}

.ul-car-info {
    padding-left: 25px;
}

.order-more ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 14px;
}

.order-more li {
    list-style-type: disc;
    font-size: 14px;
}

.order-button-container {
    display: flex;
    gap: 20px;
    margin-top: 50px;
}

.selected-cart-service {
    display: flex;
    background-color: #d9d9d9;
    align-items: center;
    border-radius: 5px; /* закругление углов рамки */
    /* padding: 5px; отступ внутри рамки */
    padding: 5px 5px 7px 0;
}

.selected-cart-service button {
    padding: 0;
}

.selected-service {
    display: flex;
    align-items: center;
    width: 114px;
}

.selected-service button {
    width: 33px;
    height: 27px;
}

.selected-cart-sevice h3 {
    font-family: Inter Medium;
    font-size: 13px;
    margin: 0;
    background-color: #d9d9d9;
}

.user-main {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 100px 0 0 0;
    padding: 10px;
    align-items: center;
}

.user-password h3 {
    font-family: Manrope Bold;
    font-size: 12px;
    color: #76a8de;
    text-align: end;
    margin-right: 20px;
    margin-top: 10px;
}

.user-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.user-footer.register {
    align-items: normal;
}

.user-container {
    position: relative;
}

.user-container h2 {
    margin: 0 0 15px 20px;
}

.or-line {
    display: flex;
    align-items: center;
    gap: 20px;
}

.or-line img {
}

.user-input {
    border: 1px solid #4197e7;
    border-radius: 15px;
    padding-left: 10px;
    font-family: Inter Regular;
    font-size: 15px;
    width: 309px;
    height: 35px;
    display: flex;
}

.user-input::placeholder {
    color: #110e0e6c;
    font-family: Inter Regular;
    font-size: 15px;
}

.user-pic {
    background-repeat: no-repeat;
    background-position: 4% center;
    padding-left: 40px;
}

.user-pic.phone {
    background-image: url("./assets/phone-user.png");
}

.user-pic.login {
    background-image: url("./assets/avatar-small.png");
}

.user-pic.password {
    background-image: url("./assets/lock-blue.png");
}

.user-main h2 {
    font-family: Inter Regular;
    font-size: 12px;
    color: #4197e7;
}

.user-footer h2 {
    font-family: Inter Medium;
    font-size: 13px;
    letter-spacing: 1px;
}

.user-footer h2 span {
    color: #0057ff;
    font-size: Inter medium;
}

.user-footer.register {
    margin-top: 40px;
}

.user-footer.register h2 {
    margin-top: 25px;
    margin-left: 170px;
    font-size: 15px;
    letter-spacing: normal;
}

.user-footer.register a {
    font-family: Inter Bold;
    color: #4197e7;
}

.orders-footer-user {
    display: flex;
    justify-content: center;
    margin-top: 100px;
    gap: 30px;
}

.btn-submit-user {
    width: 307px;
    height: 35px;
    background-color: #4197e7;
    font-family: Inter Bold;
    font-size: 15px;
    color: #ffffff;
    border-radius: 15px;
}

.btn-submit-user.register {
    margin: 0 auto;
}

.btn-appointment-arrow {
    position: absolute; /* Добавлено */
    top: 10; /* Добавлено */
    bottom: 0;
    right: 5px; /* Добавлено */
    transform: translateY(-50%); /* Добавлено */
}

.btn-appointment {
    width: 206px;
    height: 63px;
    border: 2px solid #05ff5a;
    border-radius: 15px;
    font-size: 24px;
    color: #aaa4a4;
    margin: 10px 0;
}

.btn-appointment.unlocked {
    color: #000000;
}

.btn-return-cart {
    width: 140px;
    height: 33px;
    background-color: #ef7676;
    color: #ffffff;
    border-radius: 10px;
    font-family: Inter Medium;
    font-size: 14px;
}

.btn-order-user {
    width: 151px;
    height: 43px;
    border: 1px solid;
    border-radius: 10px;
}

.btn-order-full {
    border-radius: 5px;
    font-family: Inter Regular;
    font-size: 14px;
    height: 29px;
}

.btn-order-full.confirmed {
    background: #5ff29a;
    display: flex;
    align-items: center;
    gap: 10px;
}

.btn-order-full.cancel {
    min-width: 136px;
    background: #f56464;
}

.btn-order-user-exit {
    width: 151px;
    height: 43px;
    border: 1px solid #ff0000;
    border-radius: 10px;
}

.btn-vk {
    width: 167px;
    height: 47px;
    /* font-family: Poppins SemiBold; */
    font-size: 14px;
    border: 1px solid #e0e2e9;
    border-radius: 8px;
    font-weight: bolder;
    color: #171725;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    gap: 20px;
    margin-bottom: 60px;
    margin-top: 10px;
}

.btn-go {
    width: 165px;
    height: 52px;
    font-family: Inter Medium;
    font-size: 13px;
    background: #3a4eff;
    border-radius: 15px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding-left: 10px;
}

.btn-more-user {
    display: flex;
    align-items: center;
    border: 1px solid #2788e2;
    height: 28px;
    border-radius: 5px;
    gap: 20px;
    padding: 0 10px;
}

.btn-eye-user {
    position: absolute; /* Устанавливаем абсолютное позиционирование для кнопки */
    top: 60%;
    right: 5px;
}

.btn-eye-user.login {
    top: 50%;
    transform: translateY(-50%);
}

.btn-eye-user:active {
    background: #b0d6e5;
}

button:active {
    background: #b0d6e5;
}

a:active {
    background: #b0d6e5;
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

.btn-cross-cart {
    background-color: transparent;
    padding: 0; /* убираем внутренние отступы у кнопки */
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

.organistation-full-name {
    padding-left: 10px;
}

.posts-count-container {
    position: relative;
}

.posts-count {
    padding-left: 50px;
    background-image: url("/src/assets/post.png");
    background-repeat: no-repeat;
    background-position: 4% center;
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

.container-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px;
}

.container > h3 {
    font-weight: 400;
    margin-bottom: 10px;
    color: #076289;
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

.btn-continue-info {
    width: 468px;
    height: 72px;
    margin-top: 20px;
    font-size: 32px;
    background-color: #a1c1f0;
}

.btn-back-info {
    width: 468px;
    height: 72px;
    margin-top: 20px;
    font-size: 32px;
    background-color: #a1c1f0;
}

.footer {
    margin-top: 200px;
}
</style>
