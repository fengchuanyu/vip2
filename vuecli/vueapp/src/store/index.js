import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:1
  },
  mutations: {
    add(state,payload){
      console.log(payload);
      state.count += payload.b;
    },
    reduce(state,payload){
      state.count -= payload
    }
  },
  actions: {
    reduceAction(context,payload){
      context.commit('reduce',payload)
    }
  },
  getters:{
    sum(state){
      return state.count + 100
    }
  },
  modules: {

  }
})
