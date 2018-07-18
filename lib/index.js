import {
  fetch
} from './actions'

import {
  getBorehole,
  loadBoreholes,
  checkBorehole,
  createBorehole,
  patchBorehole
} from './actions/borehole'

import {
  loadDomains
} from './actions/domains'

import {
  loadMunicipalities,
  loadCantons
} from './actions/geoapi'

import store, {
  injectReducer,
  configureStore
} from './reducers'

module.exports = {
  getBorehole,
  loadBoreholes,
  checkBorehole,
  createBorehole,
  patchBorehole,

  loadDomains,

  loadMunicipalities,
  loadCantons,

  // Reducers
  store,
  configureStore,
  injectReducer
}
