import {
  fetch
} from './index'

export function loadStratigraphies(
    page = undefined, limit = undefined, filter = undefined){
  return fetch(
    '/borehole/stratigraphy',
    {
      type: 'LIST',
      page: page,
      limit: limit,
      filter: filter
    }
  )
}

// Load an existing stratigraphy given its id
export function getStratigraphy(id){
  return fetch(
    '/borehole/stratigraphy',
    {
      action: 'GET',
      id: id
    }
  )
}

// Create a new stratigraphy for the given borehole id
export function createStratigraphy(id, kind){
  return fetch(
    '/borehole/stratigraphy',
    {
      action: 'CREATE',
      id: id,
      kind: kind
    }
  )
}

export function getLayers(id){
  return fetch(
    '/borehole/stratigraphy/layer',
    {
      action: 'LIST',
      id: id // stratigrafy id
    }
  )
}

export function getLayer(id){
  return fetch(
    '/borehole/stratigraphy/layer',
    {
      action: 'GET',
      id: id // stratigrafy id
    }
  )
}

// Create a new layer for the given stratigraphy id
export function createLayer(id){
  return fetch(
    '/borehole/stratigraphy/layer',
    {
      action: 'CREATE',
      id: id // stratigraphy id
    }
  )
}

// Create a new stratigraphy for the given borehole id
export function deleteLayer(id){
  return fetch(
    '/borehole/stratigraphy/layer',
    {
      action: 'DELETE',
      id: id // layer id
    }
  )
}

export function patchLayer(id, field, value){
  return fetch(
    '/borehole/stratigraphy/layer',
    {
      action: 'PATCH',
      id: id,
      field: field,
      value: value
    }
  )
}
