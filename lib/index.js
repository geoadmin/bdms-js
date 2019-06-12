import {
  // fetch,
  getHeight,
  getAddressByPoint
} from './actions';

import {
  loadSettings,
  patchSettings,
  patchEditorSettings,
} from './actions/settings';

import {
  loadUser
} from './actions/user';

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
  lockBorehole,
  unlockBorehole,
  editBorehole,
  deleteBorehole,
  deleteBoreholes,
  patchBorehole,
  patchBoreholes,
  getGeojson
} from './actions/borehole';

import {
  getWorkflows,
  loadWorkflows,
  patchWorkflow,
  updateWorkflow,
  submitWorkflow,
  rejectWorkflow
} from './actions/workflow';

import {
  loadStratigraphies,
  getStratigraphies,
  getStratigraphiesByBorehole,
  getStratigraphy,
  createStratigraphy,
  patchStratigraphy,
  deleteStratigraphy,
  cloneStratigraphy,
  createLayer,
  deleteLayer,
  gapLayer,
  loadLayers,
  getLayers,
  getLayer,
  patchLayer
} from './actions/stratigraphy';

import {
  loadProjects,
  createProject
} from './actions/project';

import {
  loadDomains,
  patchCodeConfig,
} from './actions/domains';

import {
  loadMunicipalities,
  getMunicipality,
  loadCantons,
  getCanton,
  getWmts
} from './actions/geoapi';

import store, {
  injectReducer,
  configureStore,
  createReducer
} from './reducers';

module.exports = {
  getHeight,
  getAddressByPoint,

  loadSettings,
  patchSettings,
  patchEditorSettings,

  loadUser,

  getBorehole,
  loadBorehole,
  updateBorehole,
  loadBoreholes,
  loadEditingBoreholes,
  loadBoreholeIds,
  getdBoreholeIds,
  checkBorehole,
  createBorehole,
  lockBorehole,
  unlockBorehole,
  editBorehole,
  deleteBorehole,
  deleteBoreholes,
  patchBorehole,
  patchBoreholes,
  getGeojson,

  getWorkflows,
  loadWorkflows,
  patchWorkflow,
  updateWorkflow,
  submitWorkflow,
  rejectWorkflow,

  loadStratigraphies,
  getStratigraphies,
  getStratigraphiesByBorehole,
  getStratigraphy,
  createStratigraphy,
  patchStratigraphy,
  deleteStratigraphy,
  cloneStratigraphy,
  createLayer,
  deleteLayer,
  gapLayer,
  loadLayers,
  getLayers,
  getLayer,
  patchLayer,

  loadProjects,
  createProject,

  loadDomains,
  patchCodeConfig,

  loadMunicipalities,
  getMunicipality,
  loadCantons,
  getCanton,
  getWmts,

  // Reducers
  store,
  configureStore,
  createReducer,
  injectReducer
};
