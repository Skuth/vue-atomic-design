import { createStore } from "vuex"

export default createStore({
  state: {
    services: []
  },
  mutations: {
    SET_SERVICES(state, services) {
      state.services = services
    }
  },
  actions: {
    fetchServices(context, services) {
      context.commit("SET_SERVICES", services)
    }
  },
  getters: {
    $allServices(state) {
      return state.services
    }
  }
})
