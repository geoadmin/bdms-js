import {
  // fetch,
  getHeight,
  getAddressByPoint,
  uploadFile,
  downloadBorehole,
  downloadAttachment
} from './actions';

import {
  loadSettings,
  patchSettings,
  patchEditorSettings,
} from './actions/settings';

import {
  acceptTerms,
  draftTerms,
  getTerms,
  getTermsDraft,
  publishTerms,
} from './actions/terms';

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
  importBoreholeList,
  lockBorehole,
  unlockBorehole,
  editBorehole,
  deleteBorehole,
  deleteBoreholes,
  patchBorehole,
  patchBoreholes,
  getGeojson,
  getBoreholeFiles,
  getEditorBoreholeFiles,
  uploadBoreholeAttachment,
  detachFile,
  patchFile,
} from './actions/borehole';

import {
  listIdentifier,
  createIdentifier,
  deleteIdentifier,
  updateIdentifier,
  addIdentifier,
  removeIdentifier,
} from './actions/identifier';

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
  downloadAttachment,

  loadSettings,
  patchSettings,
  patchEditorSettings,

  acceptTerms,
  draftTerms,
  getTerms,
  getTermsDraft,
  publishTerms,

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
  importBoreholeList,
  lockBorehole,
  unlockBorehole,
  editBorehole,
  deleteBorehole,
  deleteBoreholes,
  patchBorehole,
  patchBoreholes,
  getGeojson,
  getBoreholeFiles,
  getEditorBoreholeFiles,
  uploadBoreholeAttachment,
  detachFile,
  patchFile,

  listIdentifier,
  createIdentifier,
  deleteIdentifier,
  updateIdentifier,
  addIdentifier,
  removeIdentifier,

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
