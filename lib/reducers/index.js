import {
  combineReducers,
  createStore,
  applyMiddleware,
  // compose
} from 'redux';
import thunkMiddleware from 'redux-thunk';

export function user() {
  const initialState = {
    isFetching: false,
    fcnt: 0,
    rtime: 0, // fetch time
    data: null
  };
  return function _user(state = initialState, action) {
    const { path } = action;
    if (path !== '/user'){
      return state;
    }
    switch (action.type) {
      case 'GET': {
        return {
          ...initialState,
          rtime: (
            new Date()
          ).getTime(),
          isFetching: true
        };
      }
      case 'GET_OK': {
        let copy = {
          ...state,
          fcnt: (state.fcnt + 1),
          isFetching: false,
          rtime: (
            new Date()
          ).getTime() - state.rtime,
          data: action.json.data
        };
        return copy;
      }
      default: {
        return state;
      }
    }
  };
}

export function borehole() {
  const initialState = {
    isFetching: false,
    isLocking: false,
    fcnt: 0,
    rtime: 0, // fetch time
    error: null,
    data: {
      id: null,
      version: {
        code: null
      },
      lock: null,
      percentage: 0,
      kind: null,
      restriction: null,
      restriction_until: null,
      location_x: '',
      location_y: '',
      srs: null,
      qt_location: null,
      elevation_z: '',
      hrs: null,
      qt_elevation: null,
      drilling_date: null,
      bore_inc: null,
      bore_inc_dir: null,
      length: null,
      extended: {
        original_name: '',
        method: null,
        purpose: null,
        status: null,
        top_bedrock: null,
        groundwater: null
      },
      custom: {
        public_name: '',
        project_name: '',
        country: 'Switzerland',
        canton: null,
        city: null,
        address: '',
        landuse: null,
        cuttings: null,
        drill_diameter: '',
        qt_bore_inc_dir: null,
        qt_length: null,
        qt_top_bedrock: null,
        lit_pet_top_bedrock: null,
        lit_str_top_bedrock: null,
        chro_str_top_bedrock: null,
        remarks: '',
        mistakes: '',
        processing_status: null,
        national_relevance: null,
        attributes_to_edit: []
      },
      updater: {
        
      }
    }
  };
  return function _borehole(state = initialState, action) {
    const { path } = action;
    if (path !== '/borehole/edit' && path !== '/borehole'){
      return state;
    }
    switch (action.type) {
      case 'CLEAR': {
        return {
          ...initialState
        };
      }
      case 'GET': {
        return {
          ...initialState,
          rtime: (
            new Date()
          ).getTime(),
          isFetching: true
        };
      }
      case 'GET_OK': {
        let copy = {
          ...state,
          fcnt: (state.fcnt + 1),
          isFetching: false,
          rtime: (
            new Date()
          ).getTime() - state.rtime,
          data: {
            ...initialState.data,
            ...action.json.data,
            extended: {
              ...initialState.data.extended,
              ...action.json.data.extended
            },
            custom: {
              ...initialState.data.custom,
              ...action.json.data.custom
            }
          }
        };
        return copy;
      }
      case 'EDIT': {
        return {
          ...initialState,
          rtime: (
            new Date()
          ).getTime(),
          isFetching: true
        };
      }
      case 'EDIT_OK': {
        let copy = {
          ...state,
          fcnt: (state.fcnt + 1),
          isFetching: false,
          rtime: (
            new Date()
          ).getTime() - state.rtime,
          data: {
            ...initialState.data,
            ...action.json.data,
            extended: {
              ...initialState.data.extended,
              ...action.json.data.extended
            },
            custom: {
              ...initialState.data.custom,
              ...action.json.data.custom
            }
          }
        };
        return copy;
      }
      case 'EDIT_ERROR': {
        let copy = {
          ...state,
          fcnt: (state.fcnt + 1),
          isFetching: false,
          rtime: (
            new Date()
          ).getTime() - state.rtime,
          data: action.json.data,
          error: action.json.error
        };
        return copy;
      }
      case 'UPDATE': {
        return {
          ...state,
          data: action.data
        };
      }
      case 'LOCK': {
        return {
          ...state,
          isLocking: true
        };
      }
      case 'LOCK_OK': {
        return {
          ...state,
          isLocking: false,
          data: {
            ...state.data,
            lock: action.json.data
          }
        };
      }
      case 'UNLOCK': {
        return {
          ...state,
          isLocking: true
        };
      }
      case 'UNLOCK_OK': {
        return {
          ...state,
          isLocking: false,
          data: {
            ...state.data,
            lock: null
          }
        };
      }
      default: {
        return state;
      }
    }
  };
}

export function boreholeList() {
  const initialState = {
    isFetching: false,
    rtime: 0, // fetch time
    fcnt: 0, // fetch counter
    dlen: 0, // data counter
    data: [],
    direction: null,
    orderby: null,
    page: 1,
    pages: 0
  };
  return function boreholes(state = initialState, action) {
    const { path } = action;
    if (path !== '/borehole') {
      return state;
    }
    switch (action.type) {
      case 'LIST': {
        return {
          ...initialState,
          rtime: (
            new Date()
          ).getTime(),
          page: state.page,
          pages: state.pages,
          direction: state.direction,
          orderby: state.orderby,
          isFetching: true
        };
      }
      case 'LIST_OK': {
        let copy = {
          ...state,
          fcnt: (state.fcnt + 1),
          dlen: action.json.rows,
          isFetching: false,
          rtime: (
            new Date()
          ).getTime() - state.rtime,
          data: action.json.data,
          pages: action.json.hasOwnProperty('pages') ?
            action.json.pages : null,
          page: action.json.hasOwnProperty('page') ?
            action.json.page : null,
          direction: action.json.hasOwnProperty('direction') ?
            action.json.direction : null,
          orderby: action.json.hasOwnProperty('orderby') ?
            action.json.orderby : null
        };
        return copy;
      }
      default: {
        return state;
      }
    }
  };
}

export function boreholeEditorList() {
  const initialState = {
    isFetching: false,
    rtime: 0, // fetch time
    fcnt: 0, // fetch counter
    dlen: 0, // data counter
    data: [],
    direction: null,
    orderby: null,
    page: 1,
    pages: 0
  };
  return function boreholesEditor(state = initialState, action) {
    const { path } = action;
    if (path !== '/borehole/edit') {
      return state;
    }
    switch (action.type) {
      case 'LIST': {
        return {
          ...initialState,
          rtime: (
            new Date()
          ).getTime(),
          page: state.page,
          pages: state.pages,
          direction: state.direction,
          orderby: state.orderby,
          isFetching: true
        };
      }
      case 'LIST_OK': {
        let copy = {
          ...state,
          fcnt: (state.fcnt + 1),
          dlen: action.json.rows,
          isFetching: false,
          rtime: (
            new Date()
          ).getTime() - state.rtime,
          data: action.json.data,
          pages: action.json.hasOwnProperty('pages') ?
            action.json.pages : null,
          page: action.json.hasOwnProperty('page') ?
            action.json.page : null,
          direction: action.json.hasOwnProperty('direction') ?
            action.json.direction : null,
          orderby: action.json.hasOwnProperty('orderby') ?
            action.json.orderby : null
        };
        return copy;
      }
      default: {
        return state;
      }
    }
  };
}

export function projectList() {
  const initialState = {
    isFetching: false,
    rtime: 0, // fetch time
    fcnt: 0, // fetch counter
    dlen: 0, // data counter
    data: [],
    page: 1,
    pages: 0
  };
  return function projects(state = initialState, action) {
    const { path } = action;
    if (path !== '/borehole/project'){
      return state;
    }
    switch (action.type) {
      case 'LIST': {
        return {
          ...initialState,
          rtime: (
            new Date()
          ).getTime(),
          page: state.page,
          pages: state.pages,
          isFetching: true
        };
      }
      case 'LIST_OK': {
        let copy = {
          ...state,
          fcnt: (state.fcnt + 1),
          dlen: action.json.rows,
          isFetching: false,
          rtime: (
            new Date()
          ).getTime() - state.rtime,
          data: action.json.data,
          pages: action.json.hasOwnProperty('pages') ?
            action.json.pages : null,
          page: action.json.hasOwnProperty('page') ?
            action.json.page : null
        };
        return copy;
      }
      default: {
        return state;
      }
    }
  };
}

export function stratigraphyList() {
  const initialState = {
    isFetching: false,
    rtime: 0, // fetch time
    fcnt: 0, // fetch counter
    dlen: 0, // data counter
    data: [],
    page: 1,
    pages: 0
  };
  return function stratigraphy(state = initialState, action) {
    const { path } = action;
    if (path !== '/borehole/stratigraphy'){
      return state;
    }
    switch (action.type) {
      case 'LIST': {
        return {
          ...initialState,
          rtime: (
            new Date()
          ).getTime(),
          page: state.page,
          pages: state.pages,
          isFetching: true
        };
      }
      case 'LIST_OK': {
        let copy = {
          ...state,
          fcnt: (state.fcnt + 1),
          dlen: action.json.rows,
          isFetching: false,
          rtime: (
            new Date()
          ).getTime() - state.rtime,
          data: action.json.data,
          pages: action.json.hasOwnProperty('pages') ?
            action.json.pages : null,
          page: action.json.hasOwnProperty('page') ?
            action.json.page : null
        };
        return copy;
      }
      default: {
        return state;
      }
    }
  };
}

export function domainsList() {
  const initialState = {
    isFetching: false,
    rtime: 0, // fetch time
    fcnt: 0, // fetch counter
    data: {}
  };
  return function domains(state = initialState, action) {
    const { path } = action;
    if (path !== '/borehole/codes'){
      return state;
    }
    switch (action.type) {
      case 'LIST': {
        return {
          ...initialState,
          rtime: (
            new Date()
          ).getTime(),
          data: {},
          isFetching: true
        };
      }
      case 'LIST_OK': {
        let copy = {
          ...state,
          fcnt: (state.fcnt + 1),
          isFetching: false,
          rtime: (
            new Date()
          ).getTime() - state.rtime,
          data: action.json.data
        };
        return copy;
      }
      default: {
        return state;
      }
    }
  };
}

export function municipalityList() {
  const initialState = {
    isFetching: false,
    rtime: 0, // fetch time
    fcnt: 0, // fetch counter
    data: []
  };
  return function municipality(state = initialState, action) {
    const { path } = action;
    if (path !== '/geoapi/municipality'){
      return state;
    }
    switch (action.type) {
      case 'LIST': {
        return {
          ...initialState,
          rtime: (
            new Date()
          ).getTime(),
          data: [],
          isFetching: true
        };
      }
      case 'LIST_OK': {
        let copy = {
          ...state,
          fcnt: (state.fcnt + 1),
          isFetching: false,
          rtime: (
            new Date()
          ).getTime() - state.rtime,
          data: action.json.data
        };
        return copy;
      }
      default: {
        return state;
      }
    }
  };
}

export function cantonList() {
  const initialState = {
    isFetching: false,
    rtime: 0, // fetch time
    fcnt: 0, // fetch counter
    data: []
  };
  return function canton(state = initialState, action) {
    const { path } = action;
    if (path !== '/geoapi/canton'){
      return state;
    }
    switch (action.type) {
      case 'LIST': {
        return {
          ...initialState,
          rtime: (
            new Date()
          ).getTime(),
          data: [],
          isFetching: true
        };
      }
      case 'LIST_OK': {
        let copy = {
          ...state,
          fcnt: (state.fcnt + 1),
          isFetching: false,
          rtime: (
            new Date()
          ).getTime() - state.rtime,
          data: action.json.data
        };
        return copy;
      }
      default: {
        return state;
      }
    }
  };
}

export function layersList() {
  const initialState = {
    isFetching: false,
    rtime: 0, // fetch time
    fcnt: 0, // fetch counter
    data: []
  };
  return function layers(state = initialState, action) {
    const { path } = action;
    if (path !== '/borehole/stratigraphy/layer'){
      return state;
    }
    switch (action.type) {
      case 'LIST': {
        return {
          ...initialState,
          rtime: (
            new Date()
          ).getTime(),
          data: [],
          isFetching: true
        };
      }
      case 'LIST_OK': {
        let copy = {
          ...state,
          fcnt: (state.fcnt + 1),
          isFetching: false,
          rtime: (
            new Date()
          ).getTime() - state.rtime,
          data: action.json.data
        };
        return copy;
      }
      default: {
        return state;
      }
    }
  };
}

// Function that add dynamically reducers to the store
// Inspired by: https://stackoverflow.com/a/33044701
export function createReducer(pluginsReducers) {
  return combineReducers({
    core_user: user(),
    core_borehole: borehole(),
    core_borehole_list: boreholeList(),
    core_borehole_editor_list: boreholeEditorList(),
    core_project_list: projectList(),
    core_stratigraphy_list: stratigraphyList(),
    core_domain_list: domainsList(),
    core_municipality_list: municipalityList(),
    core_canton_list: cantonList(),
    core_layers_list: layersList(),
    ...pluginsReducers
  });
}

export function configureStore() {
  // const middlewares = [
  //   thunkMiddleware
  // ]
  // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  // const store = createStore(
  //   createReducer(),
  //   composeEnhancers(
  //     applyMiddleware(...middlewares)
  //   )
  // )

  const store = createStore(
    createReducer(),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    applyMiddleware(
      thunkMiddleware
    )
  );
  store.pluginsReducers = {};
  return store;
}

export function injectReducer(store, reducer) {
  store.pluginsReducers = {
    ...store.pluginsReducers,
    ...reducer
  };
  store.replaceReducer(createReducer(store.pluginsReducers));
}

const store = configureStore();
export default store;
