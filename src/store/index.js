// store.js
import { createStore } from "vuex";
import axios from "axios";

const api = axios.create({
    baseURL: "http://87.242.85.5",
    withCredentials: true,
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response.status === 401) {
            console.error("Необходимо авторизоваться");
        }
        return Promise.reject(error);
    }
);

const saveState = (key, state) => {
    localStorage.setItem(key, JSON.stringify(state));
};

const getState = (key) => {
    const state = localStorage.getItem(key);
    return state ? JSON.parse(state) : null;
};

export default createStore({
    state: {
        email: "",
        clientInfo: {
            lastName: "",
            firstName: "",
            middleName: "",
            birthday: "",
            phone: "",
            email: "",
        },
        adminInfo: {
            lastName: "",
            firstName: "",
            middleName: "",
            birthday: "",
            phone: "",
            email: "",
            organisationName: "",
        },
        contactInfoAdmin: {
            organisationFullName: "",
            address: "",
            phone: "",
            posts: [],
        },
        appointmentInfo: getState("appointmentInfo") || {
            selectedDate: "",
            selectedTime: "",
            year: "",
            carModel: "",
            mark: "",
            stateNumber: "",
        },
        selectedServices: getState("selectedServices") || [],
    },
    mutations: {
        SET_CLIENT_EMAIL(state, email) {
            state.email = email;
        },
        SET_CLIENT_INFO(state, info) {
            state.clientInfo = info;
        },
        SET_ADMIN_EMAIL(state, email) {
            state.email = email;
        },
        SET_ADMIN_INFO(state, info) {
            state.adminInfo = info;
        },
        SET_ADMIN_ORG_NAME(state, orgName) {
            state.contactInfoAdmin.orgName = orgName;
            localStorage.setItem("contactInfoAdmin", JSON.stringify(state.contactInfoAdmin));
        },
        SET_APPOINTMENT_INFO(state, info) {
            state.appointmentInfo = info;
            saveState("appointmentInfo", state.appointmentInfo);
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
            saveState("appointmentInfo", state.appointmentInfo);
        },
        SET_SELECTED_SERVICES(state, services) {
            state.selectedServices = services;
            saveState("selectedServices", state.selectedServices);
        },
        RESET_SELECTED_SERVICES(state) {
            state.selectedServices = [];
            saveState("selectedServices", state.selectedServices);
        },
        SET_CONTACT_INFO_ADMIN(state, info) {
            state.contactInfoAdmin = info;
        },
        SET_POST_COUNT(state, count) {
            state.postCount = count;
        },
    },
    actions: {
        async registerUser({ commit }, userData) {
            try {
                const response = await api.post("/Clients/register", userData);
                if (response.status === 200) {
                    commit("SET_CLIENT_EMAIL", userData.email);
                    alert("Регистрация успешна");
                }
            } catch (error) {
                if (error.response && error.response.status === 400) {
                    alert("Пользователь с такими данными уже существует");
                } else {
                    console.error("Ошибка регистрации:", error);
                }
            }
        },
        async loginUser({ commit }, credentials) {
            try {
                const response = await api.post("/Clients/login", credentials);
                if (response.status === 200) {
                    commit("SET_CLIENT_EMAIL", response.data.email);
                    this.$router.push("/cart");
                }
            } catch (error) {
                if (error.response && error.response.status === 400) {
                    alert("Не удалось войти: неверный логин или пароль");
                } else {
                    console.error("Ошибка входа:", error);
                }
            }
        },
        async fetchClientInfo({ commit }) {
            try {
                const response = await api.get("/Clients");
                if (response.status === 200) {
                    commit("SET_CLIENT_INFO", response.data);
                }
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    alert("Необходимо авторизоваться");
                } else {
                    console.error("Ошибка получения информации о клиенте:", error);
                }
            }
        },
        async registerAdmin({ commit }, adminData) {
            try {
                const response = await api.post("/Admins/register", adminData);
                if (response.status === 200) {
                    commit("SET_ADMIN_EMAIL", adminData.email);
                }
            } catch (error) {
                if (error.response && error.response.status === 400) {
                    alert("Пользователь с такими данными уже существует");
                } else {
                    console.error("Error registering admin:", error);
                }
            }
        },
        async loginAdmin({ commit }, credentials) {
            try {
                const response = await api.post("/Admins/login", credentials);
                if (response.status === 200) {
                    commit("SET_ADMIN_EMAIL", response.data.email);
                }
            } catch (error) {
                if (error.response && error.response.status === 400) {
                    alert("Не удалось войти: неверный логин или пароль");
                } else {
                    console.error("Error logging in:", error);
                }
            }
        },
        async fetchAdminInfo({ commit }) {
            try {
                const response = await api.get("/Admins");
                if (response.status === 200) {
                    commit("SET_ADMIN_INFO", {
                        lastName: response.data.lastName,
                        firstName: response.data.firstName,
                        middleName: response.data.middleName,
                        birthday: response.data.birthday,
                        phone: response.data.phone,
                        email: response.data.email,
                        organisationName: response.data.organisationName,
                    });
                }
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    alert("Необходимо авторизоваться");
                } else {
                    console.error("Error fetching admin info:", error);
                }
            }
        },
    },
    getters: {
        getClientInfo(state) {
            return state.clientInfo;
        },
        getAdminInfo(state) {
            return state.adminInfo;
        },
        getAppointmentInfo(state) {
            return state.appointmentInfo;
        },
        getSelectedServices(state) {
            return state.selectedServices;
        },
    },
});
