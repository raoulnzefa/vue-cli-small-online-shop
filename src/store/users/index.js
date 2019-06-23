import Vue from 'vue';
let user = window.localStorage.getItem('user');

const state = {
    user: user ? JSON.parse(user) : {},
};
const getters = {
    user: state => {
        return state.user;
    },
    isAuth: state => {
        return state.user.userName ? true : false;
    },
    isAdmin: state => {
        return state.user.isAdmin ? true : false;
    }
};
const mutations = {
    saveUser(state, payload) {
        window.localStorage.setItem('user', JSON.stringify(payload));
        state.user = payload
    },
    logOut(state) {
        window.localStorage.removeItem('user');
        state.user = {};
    }
};
const actions = {
    loginUser(context, payload) {
        return Vue.axios.get(`/users?userName=${payload.userName}&password=${payload.password}`)
            .then(response => {
                if (!response.data[0]) {
                    throw "Failed to Login";
                } else {
                    context.commit('saveUser', response.data[0]);
                }

            })
            .catch(error => {
                alert('error');

                console.log(error);
            })
    },
    logOut(context) {
        context.commit('logOut');
    }
};
export default {
    state,
    getters,
    actions,
    mutations
}