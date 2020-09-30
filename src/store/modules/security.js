import HTTP from "../../http-common";

export default {
    namespaced: true,
    state: {
        isLoading: false,
        error: null,
        isAuthenticated: false,
        user: null,
        authtoken: null
    },
    getters: {
        isLoading(state) {
            return state.isLoading;
        },
        hasError(state) {
            return state.error !== null;
        },
        error(state) {
            return state.error;
        },
        isAuthenticated(state) {
            return state.isAuthenticated;
        },
        hasRole(state) {
            return role => {
                return state.user.roles.indexOf(role) !== -1;
            }
        }
    },
    mutations: {
        AUTHENTICATING(state) {
            state.isLoading = true;
            state.error = null;
            state.isAuthenticated = false;
            state.user = null;
        },
        LOGOUT(state) {
            state.isLoading = false;
            state.error = null;
            state.isAuthenticated = false;
            state.user = null;
            state.authtoken = null;
        },
        AUTHENTICATING_SUCCESS(state, jwt) {
            state.isLoading = false;
            state.error = null;
            state.isAuthenticated = true;
            state.authtoken = jwt.token;
            
            let base64 = state.authtoken.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');

            let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));

            state.user = JSON.parse(jsonPayload);
        },
        AUTHENTICATING_ERROR(state, error) {
            state.isLoading = false;
            state.error = error;
            state.isAuthenticated = false;
            state.user = null;
        }
    },
    actions: {
        login({ commit }, payload) {
            commit("AUTHENTICATING");
            HTTP.post("/login_check", {
                username: payload.login,
                password: payload.password
            }).then(res => {
                commit("AUTHENTICATING_SUCCESS", res.data);
            }).catch(error => {
                commit("AUTHENTICATING_ERROR", error);
            })
        },
        logout({ commit }) {
            commit("LOGOUT");
        }
    },
};