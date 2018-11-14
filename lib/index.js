import {
  fetch,
  getHeight
} from './actions'

import {
  getBorehole,
  updateBorehole,
  loadBorehole,
  loadBoreholes,
  loadEditingBoreholes,
  checkBorehole,
  createBorehole,
  deleteBorehole,
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
  getHeight,

  getBorehole,
  loadBorehole,
  updateBorehole,
  loadBoreholes,
  loadEditingBoreholes,
  checkBorehole,
  createBorehole,
  deleteBorehole,
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
