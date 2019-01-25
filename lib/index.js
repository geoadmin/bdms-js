import {
  // fetch,
  getHeight,
  getAddressByPoint
} from './actions';

import {
  loadSettings,
  patchSettings
} from './actions/settings'

import {
  getBorehole,
  updateBorehole,
  loadBorehole,
  loadBoreholes,
  loadBoreholeIds,
  getdBoreholeIds,
  loadEditingBoreholes,
  checkBorehole,
  createBorehole,
  deleteBorehole,
  deleteBoreholes,
  patchBorehole,
  patchBoreholes,
  getGeojson
} from './actions/borehole'

import {
  loadStratigraphies,
  getStratigraphies,
  getStratigraphiesByBorehole,
  getStratigraphy,
  createStratigraphy,
  patchStratigraphy,
  deleteStratigraphy,
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
  getAddressByPoint,

  loadSettings,
  patchSettings,

  getBorehole,
  loadBorehole,
  updateBorehole,
  loadBoreholes,
  loadEditingBoreholes,
  loadBoreholeIds,
  getdBoreholeIds,
  checkBorehole,
  createBorehole,
  deleteBorehole,
  deleteBoreholes,
  patchBorehole,
  patchBoreholes,
  getGeojson,

  loadStratigraphies,
  getStratigraphies,
  getStratigraphiesByBorehole,
  getStratigraphy,
  createStratigraphy,
  patchStratigraphy,
  deleteStratigraphy,
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
