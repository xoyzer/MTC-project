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
        },
    },
});
