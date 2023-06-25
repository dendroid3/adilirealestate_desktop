import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'
import Cookies from 'js-cookie'

Vue.use(Vuex);

import auth from './modules/auth'
import properties from './modules/properties'
import units from './modules/units'
import ui from './modules/ui'
import adili from './modules/adili'
export default new Vuex.Store({
  modules: {
    auth,
    properties,
    units,
    ui,
    adili
  },
  plugins: [
    createPersistedState({
      key:'PROPERTIES',
      paths:['properties']
    }),
    createPersistedState({
      key:'UI',
      paths:['ui']
    }),
    createPersistedState({
      key:'AUTH',
      paths:['auth.user']
    }),
    createPersistedState({
        key: 'PROMIS_TOKEN',
        paths: ['auth.token'],
        storage: {
            getItem: key => Cookies.get(key),
            setItem: (key, value) => Cookies.set(key, value, { expires: 999, secure: false }),
            removeItem: key => Cookies.remove(key)
          }
    }),
    createPersistedState({
      key:'UNITS',
      paths:['units']
    }),
  ]
});
