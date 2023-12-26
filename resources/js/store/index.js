import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        clientsList: []
    },
    mutations: {
        setClientsList(state, payload) {
            if(payload) {
                state.clientsList = payload;
            }
            else state.clientsList = [];
        },
    },
    actions: {
        getClientsList(context) {
            return new Promise(function (resolve, reject) {
                axios.get('api/statistics/clientsPriceComparison')
                    .then(res => {
                        context.commit('setClientsList', res.data)
                        resolve(res.status)
                    }, () => {
                        reject()
                    })
            })
        }
    },
    getters: {},
    modules: {}
})
