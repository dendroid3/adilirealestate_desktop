import axios from 'axios'
import router from '../../router'
const state = {
  user: {},
  token: null,
  login_message: 'Hey! Ensure you have the right details. If you lost your account`s details, contact admin.',
  register_message: 'by signing up you agree to the terms and conditions.',
  verification_request_sent: false
}
const getters = {
  getUser: (state) => (state.user),
  getLoginMessage: (state) => (state.login_message),
  getRegisterMessage: (state) => (state.register_message),
  isVerificationRequestSent: (state) =>   (state.verification_request_sent)
}
const actions = {
  async register({commit}, data){
    try{
      const response = await
      axios.post('/api/register', data)
      console.log(response)
      if(response.status == 200){
        commit('LOGIN_USER', response.data)
        router.push('/dashboard')
      } else {
        commit('SET_REGISTER_ERROR_FLASH', response.data)
      } 
      return false
    }catch(e){
      console.log(e)
      return false
    }
  },
  async login({commit}, data){
    try{
      const response = await
        axios.post('/api/login', data)
        console.log(response)
      if(response.status == 200){
        commit('LOGIN_USER', response.data)
        
        // axios.defaults.baseURL = process.env.VUE_APP_API;
        window.location.href = process.env.VUE_APP_DOMAIN +'/dashboard'


        // router.push('/dashboard')
      } else if(response.data.status == 404){
        commit('SET_LOGIN_ERROR_FLASH')
      }
      return false
    }catch(e){
      console.log(e)
      return false
    }
  },
  async sendVerificationRequest({commit, dispatch}){
    try{
      const response = await
      axios.get('/api/send_verification_request')
      commit('SET_verification_request_sent', response.data)
      if(response.data.success){
        const alert_box_info = {
          status: true,
          information: 'Request sent. We will call you to arrange the meeting.',
          code: 'success'
        }
        dispatch('toogleAlertBox', alert_box_info, {root: true})
      }
    }catch(e){
      console.log(e)
      
      const alert_box_info = {
        status: true,
        information: 'Something has gone wrong while sending request, contact admin for help.',
        code: 'error'
      }
      dispatch('toogleAlertBox', alert_box_info, {root: true})
    }
  },
  async logout({commit}){
    try{
      const response = await
      axios.get('/api/logout')
      commit('LOGOUT_USER', response.data)
      router.push('/')
    }catch(e){
      console.log(e)
    }
  }
}
const mutations = {
  LOGIN_USER: (state, response) => (
    state.user = response.user,
    state.token = response.token
  ),
  LOGOUT_USER: (state) => (
    state.user = {},
    state.token = null
  ),
  SET_REGISTER_ERROR_FLASH: (state, message) => (
    state.register_message = message
  ),
  SET_LOGIN_ERROR_FLASH: (state) => (
    state.login_message = 'account does not exist. confirm you have the right details and carry on forward. In case you have forgotten your details, contact admin.'
  ),
  SET_verification_request_sent: (state, verification_request_sent) => (
    state.verification_request_sent = verification_request_sent
  )
}

export default {
  state,
  getters,
  actions,
  mutations
}
