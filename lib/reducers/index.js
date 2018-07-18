import {
  combineReducers,
  createStore,
  applyMiddleware
} from 'redux'
import thunkMiddleware from 'redux-thunk'

export function boreholeList(){
  const initialState = {
    isFetching: false,
    rtime: 0, // fetch time
    fcnt: 0, // fetch counter
    dlen: 0, // data counter
    data: [],
    page: 1,
    pages: 0
  }
  return function boreholes(state = initialState, action) {
    const {path} = action
    if(path !== '/borehole') return state
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
        }
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
          pages: action.json.hasOwnProperty('pages')?
            action.json.pages: null,
          page: action.json.hasOwnProperty('page')?
            action.json.page: null
        }
        return copy
      }
      default: {
        return state
      }
    }
  }
}


export function domainsList(){
  const initialState = {
    isFetching: false,
    rtime: 0, // fetch time
    fcnt: 0, // fetch counter
    data: {}
  }
  return function domains(state = initialState, action) {
    const {path} = action
    if(path !== '/borehole/codes') return state
    switch (action.type) {
      case 'LIST': {
        return {
          ...initialState,
          rtime: (
            new Date()
          ).getTime(),
          data: {},
          isFetching: true
        }
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
        }
        return copy
      }
      default: {
        return state
      }
    }
  }
}


export function municipalityList(){
  const initialState = {
    isFetching: false,
    rtime: 0, // fetch time
    fcnt: 0, // fetch counter
    data: []
  }
  return function municipality(state = initialState, action) {
    const {path} = action
    if(path !== '/geoapi/municipality') return state
    switch (action.type) {
      case 'LIST': {
        return {
          ...initialState,
          rtime: (
            new Date()
          ).getTime(),
          data: [],
          isFetching: true
        }
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
        }
        return copy
      }
      default: {
        return state
      }
    }
  }
}


export function cantonList(){
  const initialState = {
    isFetching: false,
    rtime: 0, // fetch time
    fcnt: 0, // fetch counter
    data: []
  }
  return function canton(state = initialState, action) {
    const {path} = action
    if(path !== '/geoapi/canton') return state
    switch (action.type) {
      case 'LIST': {
        return {
          ...initialState,
          rtime: (
            new Date()
          ).getTime(),
          data: [],
          isFetching: true
        }
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
        }
        return copy
      }
      default: {
        return state
      }
    }
  }
}


// Function that add dynamically reducers to the store
// Inspired by: https://stackoverflow.com/a/33044701
export function createReducer(pluginsReducers) {
  return combineReducers({
    core_borehole_list: boreholeList(),
    core_domain_list: domainsList(),
    core_municipality_list: municipalityList(),
    core_canton_list: cantonList(),
    ...pluginsReducers
  })
}

export function configureStore() {
  const store = createStore(
    createReducer(),
    // window !== undefined? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(): null,
    applyMiddleware(
      thunkMiddleware
    )
  )
  store.pluginsReducers = {};
  return store
}

export function injectReducer(store, reducer) {
  store.pluginsReducers = {
    ...store.pluginsReducers,
    ...reducer
  }
  store.replaceReducer(createReducer(store.pluginsReducers))
}

const store = configureStore()
export default store
