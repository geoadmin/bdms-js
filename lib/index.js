import {
  fetch
} from './actions'

import {
  getBorehole,
  loadBoreholes,
  checkBorehole,
  createBorehole,
  patchBorehole,
  getGeojson
} from './actions/borehole'

import {
  loadStratigraphies,
  getStratigraphy,
  createStratigraphy,
  createLayer,
  deleteLayer,
  getLayers,
  getLayer,
  patchLayer
} from './actions/stratigraphy'

import {
  loadProjects,
  createProject
} from './actions/project'

import {
  loadDomains
} from './actions/domains'

import {
  loadMunicipalities,
  loadCantons
} from './actions/geoapi'

import store, {
  injectReducer,
  configureStore,
  createReducer
} from './reducers'

module.exports = {
  getBorehole,
  loadBoreholes,
  checkBorehole,
  createBorehole,
  patchBorehole,
  getGeojson,

  loadStratigraphies,
  getStratigraphy,
  createStratigraphy,
  createLayer,
  deleteLayer,
  getLayers,
  getLayer,
  patchLayer,

  loadProjects,
  createProject,

  loadDomains,

  loadMunicipalities,
  loadCantons,

  // Reducers
  store,
  configureStore,
  createReducer,
  injectReducer
}
