import axios from 'axios'

const state = {
  my_properties: {}
}
const getters = {
  getMyProperties_units: (state) => (state.my_units)
}
const actions = {
  async fetchMyProperties({commit}) {
    try{
      const response = await
      axios.get('http://localhost:8000/api/get_my_units', {
        headers: {
          Authorization: Authorization
        }
      })
      commit('SET_MY_PROPERTIES', response.data.properties)
    }catch(e){console.log(e)}
  }
}
const mutations = {
  SET_MY_PROPERTIES: (state, my_properties) => (
    state.my_properties = my_properties
  )
}

export default {
  state,
  getters,
  actions,
  mutations
}
