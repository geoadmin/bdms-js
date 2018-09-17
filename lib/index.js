import {
  fetch
} from './actions'

import {
  getBorehole,
  loadBoreholes,
  loadEditingBoreholes,
  checkBorehole,
  createBorehole,
  patchBorehole,
  getGeojson
} from './actions/borehole'

import {
  loadStratigraphies,
  getStratigraphies,
  getStratigraphiesByBorehole,
  getStratigraphy,
  createStratigraphy,
  createLayer,
  deleteLayer,
  loadLayers,
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
  getMunicipality,
  loadCantons,
  getCanton
} from './actions/geoapi'

import store, {
  injectReducer,
  configureStore,
  createReducer
} from './reducers'

module.exports = {
  getBorehole,
  loadBoreholes,
  loadEditingBoreholes,
  checkBorehole,
  createBorehole,
  patchBorehole,
  getGeojson,

  loadStratigraphies,
  getStratigraphies,
  getStratigraphiesByBorehole,
  getStratigraphy,
  createStratigraphy,
  createLayer,
  deleteLayer,
  loadLayers,
  getLayers,
  getLayer,
  patchLayer,

  loadProjects,
  createProject,

  loadDomains,

  loadMunicipalities,
  getMunicipality,
  loadCantons,
  getCanton,

  // Reducers
  store,
  configureStore,
  createReducer,
  injectReducer
}
