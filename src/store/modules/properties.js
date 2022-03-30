import axios from 'axios'

const state = {
  added_property: {},
  my_properties: [],
  my_units: [],
  vacancies: [],
  added_units_details: null,
  my_property: null,
  set_filters: {},
  properties_view: {},
  property_view_page: {},
  unit_types: [],
  property_types: []
}

const getters = {
  getAddedProperty: (state) => (state.added_property),
  getMyProperties: (state) => (state.my_properties),
  getMyUnits: (state) => (state.my_units),
  getVacancies: (state) => (state.vacancies),
  getAddedUnitsDetails: (state) => (state.added_units_details),
  getMyProperty: (state) => (state.my_property),
  getSetFilters: (state) => (state.set_filters),
  getPropertiesView: (state) => (state.properties_view),
  getPropertyViewPage: (state) => (state.property_view_page),
  getPropertyTypes: (state) => (state.property_types),
  getUnitTypes: (state) => (state.unit_types),
}

const actions = {
  setAddedProperty({commit}, data){
    commit('ADDED_PROPERTY', data)
  },
  setAddedUnits({commit}, data){
      commit('SET_ADDED_UNITS_DETAILS', data)  
  },
  async deleteProperty({}, data){
    try{
      console.log(data)
      const response = await
      axios.post('/api/property/delete', data)
      console.log(response)
    } catch(e){
      console.log(e)
    }
  },
  async getTypes({commit}, data){
    try{
      const response = await
      axios.get('/api/get_types', data)
      console.log(response)
      commit('SET_PROPERTY_TYPES', response.data.property_types)
      commit('SET_UNIT_TYPES', response.data.unit_types)
    } catch(e){
      console.log(e)
    }
  },
  async addProperty({commit, dispatch}, data){
    try{
      const response = await
      axios.post('/api/property/add', data)
      console.log(response)
      commit('ADDED_PROPERTY', response.data.response)
      dispatch('setAddPropertyStep', 2, {root: true})

      if(data.type === 'Stand-Alone'){
        const info_box = {
          status: true,
          information: 'Here you are to add the images that will appear when this property is vacant'
        }
        dispatch('toogleInfoBox', info_box, {root: true})
      } else {
        const info_box = {
          status: true,
          information: 'Here you are to add the images that will appear on the vacancies page when there are more than one vacant unit in this property'
        }
        dispatch('toogleInfoBox', info_box, {root: true})
      }
      const alert_box_info = {
        status: true,
        information: 'Property successfully added!',
        code: 'success'
      }
      dispatch('toogleAlertBox', alert_box_info, {root: true})
      return false
    } catch (e) {
      const alert_box_info = {
        status: true,
        information: 'Something has gone wrong while, adding property, contact admin for help.',
        code: 'error'
      }
      dispatch('toogleAlertBox', alert_box_info, {root: true})
    }
  },

  async addPropertyImages({getters, dispatch}, data){
    try{
      const response = await

      axios.post('/api/property/add_images', data)
      console.log(response)

      if(getters.getAddedProperty.type === 'Stand-Alone'){

        dispatch('setAddPropertyStep', 5, {root: true})

        const info_box = {
          status: true,
          information: 'Here you are to add the additional infomation as you see fit. Enter a label for the piece of the information together with it`s value (the information). This information may be rules, modes of bill settlement e.t.c'
        }
        dispatch('toogleInfoBox', info_box, {root: true})

      } else {
        
        dispatch('setAddPropertyStep', 3, {root: true})

        const info_box = {
          status: true,
          information: 'Here you are to add the units in the just-added property. You may have different types of units in the same property, if that is the case, enter and submit each type at a time. Enter one type, you will have the opportunity to come back to this step'
        }
        dispatch('toogleInfoBox', info_box, {root: true})
      }
      
      const alert_box_info = {
        status: true,
        information: 'Property images successfully added!',
        code: 'success'
      }
      dispatch('toogleAlertBox', alert_box_info, {root: true})
      return false
    } catch (e) {
      const alert_box_info = {
        status: true,
        information: 'Something has gone wrong while adding property images, contact admin for help.',
        code: 'error'
      }
      dispatch('toogleAlertBox', alert_box_info, {root: true})
    }
  },

  async addUnits({commit, dispatch}, data){
    try{
      const response = await

      axios.post('/api/property/unit/add', data)
      console.log(response)
      commit('SET_ADDED_UNITS_DETAILS', response.data)
      dispatch('setAddPropertyStep', 4, {root: true})

      const info_box = {
        status: true,
        information: 'here you are to add the images that will appear on the vacancies page when one of these just-added units is vacant'
      }
      dispatch('toogleInfoBox', info_box, {root: true})
      
      const alert_box_info = {
        status: true,
        information: data.units.length + ' units successfully added!',
        code: 'success'
      }
      dispatch('toogleAlertBox', alert_box_info, {root: true})
      return false
    } catch (e) {
      
      const alert_box_info = {
        status: true,
        information: 'Something has gone wrong while adding units, contact admin for help.',
        code: 'error'
      }
      dispatch('toogleAlertBox', alert_box_info, {root: true})
    }
  },

  async addUnitsImages({dispatch}, data){
    try{
      const response = await

      axios.post('/api/property/unit/add_images', data)
      console.log(response)
      dispatch('setAddPropertyStep', 5, {root: true})

      const info_box = {
        status: true,
        information: 'Here you are to add the additional infomation as you see fit. Enter a label for the piece of the information together with it`s value (the information). This information may be rules, modes of bill settlement e.t.c'
      }
      dispatch('toogleInfoBox', info_box, {root: true})
      
      const alert_box_info = {
        status: true,
        information:'Unit images successfully added!',
        code: 'success'
      }
      dispatch('toogleAlertBox', alert_box_info, {root: true})
      // router.push('/dashboard')
      return false
    } catch (e) {
      const alert_box_info = {
        status: true,
        information: "Something has gone wrong while adding units' images, contact admin for help.",
        code: 'error'
      }
      dispatch('toogleAlertBox', alert_box_info, {root: true})
    }
  },

  async addUnitsDetails({commit, dispatch, getters}, data){
    try{
      const response = await

      axios.post('/api/property/unit/add_details', data)
      dispatch('toogleInfoBox', {status: false}, {root: true})
      console.log(response)
      dispatch('setAddPropertyStep', 6, {root: true})
      dispatch('fetchMyProperty', {property_id: getters.getAddedProperty.id}, {root: true})

      const info_box = {
        status: true,
        information: 'The process is commplete. You may click on the `add units` button to add another units type to this property, otherwise, this is the preview of what you have just added.'
      }
      dispatch('toogleInfoBox', info_box, {root: true})

      const alert_box_info = {
        status: true,
        information: 'unit details successfully added!',
        code: 'success'
      }
      dispatch('toogleAlertBox', alert_box_info, {root: true})

      return false
    } catch (e) {
      const alert_box_info = {
        status: true,
        information: "Something has gone wrong while adding units' details, contact admin for help.",
        code: 'error'
      }
      dispatch('toogleAlertBox', alert_box_info, {root: true})
    }
  },

  async addPropertyDetails({dispatch, getters}, data){
    try{
      const response = await

      axios.post('/api/property/add_details', data)
      console.log(response)
      dispatch('toogleInfoBox', {status: false}, {root: true})
      dispatch('setAddPropertyStep', 6, {root: true})
      dispatch('fetchMyProperty', {property_id: getters.getAddedProperty.id}, {root: true})
      
      const info_box = {
        status: true,
        information: 'The process is commplete.This is the preview of what you have just added.'
      }
      dispatch('toogleInfoBox', info_box, {root: true})
      const alert_box_info = {
        status: true,
        information: 'Property details successfully added!',
        code: 'success'
      }
      dispatch('toogleAlertBox', alert_box_info, {root: true})
      return false
    } catch (e) {
      const alert_box_info = {
        status: true,
        information: "Something has gone wrong while adding property's details, contact admin for help.",
        code: 'error'
      }
      dispatch('toogleAlertBox', alert_box_info, {root: true})
    }
  },
  
  async fetchMyProperty({commit, dispatch}, data){
    try{
      console.log(data)
      const response = await
      axios.post('/api/property/view', data)
      console.log(response)
      commit('SET_MY_PROPERTY', response.data.property)
      return true
    } catch (e) {
      const alert_box_info = {
        status: true,
        information: 'Something has gone wrong while fetching your property, contact admin for help.',
        code: 'error'
      }
      dispatch('toogleAlertBox', alert_box_info, {root: true})
    }
  }, 

  async fetchMyProperties({commit}){
    try{
      const response = await
      axios.get('/api/property/get_all_mine')
      console.log(response)
      commit('SET_MY_PROPERTIES', response.data.properties)

    } catch (e) {
      const alert_box_info = {
        status: true,
        information: 'Something has gone wrong while fetching your properties, contact admin for help.',
        code: 'error'
      }
      dispatch('toogleAlertBox', alert_box_info, {root: true})
    }
  },
  
  async fetchMyUnits({commit}){
    try{
      const response = await
      axios.get('/api/property/unit/get_all_mine')
      console.log(response)
      commit('SET_MY_UNITS', response.data.units)

    } catch (e) {
      const alert_box_info = {
        status: true,
        information: 'Something has gone wrong while fetching your units, contact admin for help.',
        code: 'error'
      }
      dispatch('toogleAlertBox', alert_box_info, {root: true})
    }
  },

  async changeUnitVacancyStatus({dispatch}, data){
    try{
      const response = await
      axios.post('/api/property/unit/change_vacancy_status', data)
      console.log(response)
      dispatch('shuffleMyProperties', {property_id: data.property_id, addition: response.data.unit.vacancy}, {root: true})

      if(response.status == 200){
        return response.data.unit.vacancy
      }

    } catch (e) {
      const alert_box_info = {
        status: true,
        information: "Something has gone wrong while changing your unit's vacancy status, contact admin for help.",
        code: 'error'
      }
      dispatch('toogleAlertBox', alert_box_info, {root: true})
    }
  },

  async changePropertyVacancyStatus({dispatch}, data){
    try{
      const response = await
      axios.post('/api/property/change_vacancy_status', data)
      console.log(response)
      if(response.status == 200){
        return response.data.property.vacancy
      }
      // return data.vacancy
    } catch (e) {
      const alert_box_info = {
        status: true,
        information: e,
        code: 'error'
      }
      dispatch('toogleAlertBox', alert_box_info, {root: true})
      console.log(e)
    }
  },

  shuffleMyProperties({getters},data){
    const affected_property = getters.getMyProperties.filter(property => (property.id == data.property_id))
    if(data.addition){
      affected_property[0].vacancies_count ++
    } else {
      affected_property[0].vacancies_count --
    }
  },

  async fetchVacancies({commit, getters, dispatch}, page){
    try{
      console.log('response.data.data')
      if(getters.getSetFilters.lowest_rent || getters.getSetFilters.highest_rent || getters.getSetFilters.shared ||  getters.getSetFilters.location){
        const data = getters.getSetFilters
        data.page = page.page
        dispatch('fetchFilteredVacancies', data, {root: true})
        
        return true
      }
      
      const response = await

      axios.post('/api/get_vacancies', page)
      console.log('response.data.data')
      console.log(response)
      if(response.status == 200){
        commit('SET_VACANCIES', response.data.vacancies.data)
        commit('SET_PROPERTIES_VIEW_COUNTER', response.data.vacancies)
        return response.data.vacancy
      }
    } catch (e) {
      const alert_box_info = {
        status: true,
        information: 'Something has gone wrong while, fetching vacancies, contact admin for help.',
        code: 'error'
      }
      dispatch('toogleAlertBox', alert_box_info, {root: true})
    }
  },

  async fetchFilteredVacancies({commit}, data){
    try{
      const response = await
      axios.post('/api/get_filtered_vacancies', data)
      console.log(response)
      if(response.status == 200){
        const vacancies_stub = []
        response.data.grouped.data[0] ? vacancies_stub.push(response.data.grouped.data) : null
        response.data.standalone.data[0] ? vacancies_stub.push(response.data.standalone.data) : null

        const vacancies = []
        vacancies_stub.forEach(vacancies_array => {
          vacancies_array.forEach(vacancy => {
            vacancies.push(vacancy)
          });
        });
        console.log(vacancies)
        commit('SET_VACANCIES', vacancies)
        const properties_view = {}
        properties_view.current_page = (response.data.grouped.current_page > response.data.standalone.current_page ? response.data.grouped.current_page : response.data.standalone.current_page)
        properties_view.last_page = (response.data.grouped.last_page > response.data.standalone.last_page ? response.data.grouped.last_page : response.data.standalone.last_page)
        properties_view.last_page = (response.data.grouped.last_page > response.data.standalone.last_page ? response.data.grouped.last_page : response.data.standalone.last_page)
        commit('SET_PROPERTIES_VIEW_COUNTER', properties_view)

        commit('SET_SET_FILTERS', data)
        return false
      }
    } catch (e) {
      const alert_box_info = {
        status: true,
        information: 'Something has gone wrong while filtering vacancies, filtering vacancies, contact admin for help.',
        code: 'error'
      }
      dispatch('toogleAlertBox', alert_box_info, {root: true})
      return false
    }
  },

  async fetchViewProperty({commit, dispatch}, data){
    try{
      const response = await 
      axios.post('/api/get_view_property', data)
      console.log(response)
      commit('SET_PROPERTY_VIEW_PAGE', response.data.property)
      return true

      // if(response.data.vacancy.rent){property_view_page
        //standalone property
      // }
    }catch(e){
      
      const alert_box_info = {
        status: true,
        information: 'Something has gone wrong while fetching this property, contact admin for help.',
        code: 'error'
      }
      dispatch('toogleAlertBox', alert_box_info, {root: true})
      return true
    }
  }
}

const mutations = {
  SET_PROPERTY_TYPES: (state, property_types) => (
    state.property_types = property_types
  ),
  SET_UNIT_TYPES: (state, unit_types) => (
    state.unit_types = unit_types
  ),
  ADDED_PROPERTY: (state, property) => (
    state.added_property = property
  ),
  SET_MY_PROPERTIES: (state, properties) => (
    state.my_properties = properties
  ),
  SET_MY_UNITS: (state, units) => (
    state.my_units = units
  ),
  SET_VACANCIES: (state, vacancies) => (
    state.vacancies = vacancies
  ),
  SET_ADDED_UNITS_DETAILS: (state, added_units_details) => (
    state.added_units_details = added_units_details
  ),
  SET_MY_PROPERTY: (state, property) => (
    state.my_property = property
  ),
  SET_SET_FILTERS: (state, set_filters) => (
    state.set_filters = set_filters
  ),
  SET_PROPERTIES_VIEW_COUNTER: (state, data) => (
    state.properties_view.current_page = data.current_page,
    state.properties_view.last_page = data.last_page
  ),
  SET_PROPERTY_VIEW_PAGE: (state, property) => (
    state.property_view_page = property
  )
}

export default {
  state,
  getters,
  actions,
  mutations
}