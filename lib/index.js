import {
  // fetch,
  getHeight,
  getAddressByPoint,
  uploadFile,
  downloadBorehole
} from './actions';

import {
  loadSettings,
  patchSettings,
  patchEditorSettings,
} from './actions/settings';

import {
  setAuthentication,
  unsetAuthentication,
  loadUser,
  createUser,
  updateUser,
  disableUser,
  deleteUser,
  enableUser,
  checkUsername,
  listUsers
} from './actions/user';

import {
  createWorkgroup,
  enableWorkgroup,
  disableWorkgroup,
  deleteWorkgroup,
  listWorkgroups,
  setRole,
  updateWorkgroup
} from './actions/workgroups';

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
  uploadBoreholeList,
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
  addBedrock,
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
  getWmts,
  getWms
} from './actions/geoapi';

import store, {
  injectReducer,
  configureStore,
  createReducer
} from './reducers';

module.exports = {
  getHeight,
  getAddressByPoint,
  uploadFile,
  downloadBorehole,

  loadSettings,
  patchSettings,
  patchEditorSettings,

  setAuthentication,
  unsetAuthentication,
  loadUser,
  createUser,
  updateUser,
  disableUser,
  deleteUser,
  enableUser,
  checkUsername,
  listUsers,

  createWorkgroup,
  enableWorkgroup,
  disableWorkgroup,
  deleteWorkgroup,
  listWorkgroups,
  setRole,
  updateWorkgroup,

  getBorehole,
  loadBorehole,
  updateBorehole,
  loadBoreholes,
  loadEditingBoreholes,
  loadBoreholeIds,
  getdBoreholeIds,
  checkBorehole,
  createBorehole,
  uploadBoreholeList,
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
  addBedrock,
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
  getWms,

  // Reducers
  store,
  configureStore,
  createReducer,
  injectReducer
};
