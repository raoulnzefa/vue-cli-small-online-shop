import axios from 'axios';

export default function (Vue) {
    Vue.axios = axios.create({
        baseURL: process.env.VUE_APP_API_BASE_URL
    })
    Object.defineProperties(Vue.prototype, {
        $axios: {
            get() {
                return Vue.axios;
            }
        }
    })
}
