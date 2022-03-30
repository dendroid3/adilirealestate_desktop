const state = {
    add_property: {
        step: 1
    },
    info_box_details: {},
    alert_box_details: {
        status: false
    },
    units_filter: null,
    properties_filter: null,
    welcome_card: true,
    open_filter: false,
}
const getters = {
    getAddPropertyStep: (state) => (state.add_property.step),
    getInfoBoxDetails: (state) => (state.info_box_details),
    getAlertBoxDetails: (state) => (state.alert_box_details),
    getUnitsFilter: (state) => (state.units_filter),
    getPropertiesFilter: (state) => (state.properties_filter),
    isWelcomeCardOpen: (state) => (state.welcome_card),
    isFIlterOpen: (state) => (state.open_filter),
}
const actions = {
    toogleFilter({commit}, data){
        commit('TOOGLE_FILTER', data)
    },
    setAddPropertyStep({commit}, step){
        commit('SET_ADD_PROPERTY_STEP', step)
    },
    
    toogleInfoBox({commit}, data){
        commit('SET_INFO_BOX_INFORMATION', data.information ? data.information : null)
        commit('TOOGLE_INFO_BOX', data.status)
    },

    toogleAlertBox({commit}, data){
        commit('SET_ALERT_BOX_INFORMATION', data.information ? data.information : null)
        commit('SET_ALERT_BOX_CODE', data.code ? data.code : null)
        commit('TOOGLE_ALERT_BOX', data.status)
    },

    setUnitsFilter({commit}, data) {
        commit('SET_UNITS_FILTER', data)
    },

    setPropertiesFilter({commit}, data) {
        commit('SET_PROPERTIES_FILTER', data)
    },
    
    toogleWelcomeCard({commit}, data){
        commit('TOOGLE_WELCOME_CARD', data)
    }
}
const mutations = {
    TOOGLE_FILTER: (state, data) => (state.open_filter = data), 

    SET_ADD_PROPERTY_STEP:(state, step) => (state.add_property.step = step),

    SET_INFO_BOX_INFORMATION:(state, data) => (state.info_box_details.information = data),

    TOOGLE_INFO_BOX:(state, data) => (state.info_box_details.status = data),

    SET_ALERT_BOX_INFORMATION:(state, data) => (state.alert_box_details.information = data),

    SET_ALERT_BOX_CODE:(state, data) => (state.alert_box_details.code = data),

    TOOGLE_ALERT_BOX:(state, data) => (state.alert_box_details.status = data),

    SET_UNITS_FILTER:(state, data) => (state.units_filter = data),

    SET_PROPERTIES_FILTER:(state, data) => (state.properties_filter = data),

    TOOGLE_WELCOME_CARD:(state, data) => (state.welcome_card = data),
}

export default {
    state,
    getters,
    actions,
    mutations
}