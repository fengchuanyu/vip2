import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
  state:{
    ma:1123
  },
  mutations:{
    mAdd(state){
      state.ma += 5
    }
  }
}

export default new Vuex.Store({
  state: {
    count:1,
    str:"hello"
  },
  mutations: {
    add(state,payload){
      console.log(payload);
      state.count += payload.b;
    },
    reduce(state){
      // state.count -= payload
      state.count -= 1

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
    goods:moduleA
  }
})
