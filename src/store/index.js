import Cookies from "js-cookie";
import { createStore } from "vuex"
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    state: {
        user: null,
        token: null,
        avatar: null
    },
    mutations: {
        setUser(state, user, avatar) {
            Cookies.set("user", user);
            state.user = user;
            console.log(state.user);
        },
        setAvatar(state, avatar) {
            localStorage.setItem("avatar", avatar);
            state.avatar = avatar;
        },
        setToken(state, token) {
            Cookies.set("token", token);
            state.token = token;
        },
        deleteUser(state) {
            Cookies.remove("user");
            state.user = null;
        },
        deleteAvatar(state) {
            localStorage.removeItem("avatar");
            state.avatar = null;
        }
        ,
        deleteToken(state) {
            Cookies.remove("token");
            state.token = null;
        }
    },
    getters: {
        getUser(state) {
            state.user = Cookies.get("user");
            return state.user;
        },
        getToken(state) {
            state.token = Cookies.get("token");
            return state.token;
        },
        getAvatar(state) {
            state.avatar = localStorage.getItem("avatar");
            return state.avatar;
        },
        userIsLoggedIn(state) {
            return state.user != null;
        }
    },
    plugins: [createPersistedState()]
})

export default store