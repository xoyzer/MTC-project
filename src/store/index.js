import { createStore } from "vuex";

export default createStore({
    state: {
        selectedServices: [],
        appointmentInfo: {
            selectedDate: "",
            selectedTime: "",
            year: "",
            carModel: "",
            mark: "",
            stateNumber: "",
        },
        orders: [],
        email: "",
        contactInfoAdmin: {
            organisationFullName: "",
            address: "",
            phone: "",
            // email: "",
        },
        postCount: 0,
        posts: JSON.parse(localStorage.getItem("services")) || [],
    },
    mutations: {
        SET_SELECTED_SERVICES(state, services) {
            state.selectedServices = services;
        },
        SET_APPOINTMENT_INFO(state, info) {
            state.appointmentInfo = info;
        },
        RESET_APPOINTMENT_INFO(state) {
            state.appointmentInfo = {
                selectedDate: "",
                selectedTime: "",
                year: "",
                carModel: "",
                mark: "",
                stateNumber: "",
            };
        },
        RESET_SELECTED_SERVICES(state) {
            state.selectedServices = [];
        },
        ADD_ORDER(state, order) {
            state.orders.push(order);
            localStorage.setItem("orders", JSON.stringify(state.orders));
        },
        LOAD_ORDERS(state) {
            const savedOrders = localStorage.getItem("orders");
            if (savedOrders) {
                state.orders = JSON.parse(savedOrders);
            }
        },
        SET_ADMIN_EMAIL(state, email) {
            state.email = email;
        },
        SET_CONTACT_INFO_ADMIN(state, info) {
            state.contactInfoAdmin = info;
        },
        SET_POST_COUNT(state, count) {
            state.postCount = count;
        },
        SET_POSTS(state, posts) {
            state.posts = posts;
            localStorage.setItem("services", JSON.stringify(posts));
        },
    },
    actions: {
        saveContactInfoAdmin({ commit }, contactInfoAdmin) {
            commit("SET_CONTACT_INFO_ADMIN", contactInfoAdmin);
        },
        logout({ commit }) {
            commit("LOGOUT");
        },
        loadOrders({ commit }) {
            commit("LOAD_ORDERS");
        },
        savePosts({ commit }, posts) {
            commit("SET_POSTS", posts);
        },
    },
    getters: {
        getContactInfoAdmin(state) {
            return state.contactInfoAdmin;
        },
    },
});
