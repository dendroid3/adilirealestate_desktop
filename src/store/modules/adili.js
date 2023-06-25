import axios from 'axios'
const state = {}

const getters = {}

const actions = {
    async sendEnquiry({}, data){
        const res = await
        axios.post(process.env.VUE_APP_API + '/enquire', data)
        alert(res.data.message)
    },

    async sendBooking({}, data){
        const res = await
        axios.post(process.env.VUE_APP_API + '/book', data)
        alert(res.data.message)
    }
}

const mutations = {}

export default {
    state, getters, actions, mutations
}
