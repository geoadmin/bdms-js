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

export function getStratigraphies(borehole, kind){
  return fetch(
    '/borehole/stratigraphy',
    {
      action: 'LIST',
      filter: {
        borehole: borehole,
        kind: kind
      }
    }
  )
}

export function getStratigraphiesByBorehole(id){
  return fetch(
    '/borehole/stratigraphy',
    {
      action: 'LIST',
      filter: {
        borehole: id
      }
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

export function patchStratigraphy(id, field, value){
  return fetch(
    '/borehole/stratigraphy',
    {
      action: 'PATCH',
      id: id,
      field: field,
      value: value
    }
  )
}

export function deleteStratigraphy(id){
  return fetch(
    '/borehole/stratigraphy',
    {
      action: 'DELETE',
      id: id
    }
  );
}

// Create a new layer for the given stratigraphy id
export function cloneStratigraphy(id){
  return fetch(
    '/borehole/stratigraphy',
    {
      action: 'CLONE',
      id: id // stratigraphy id
    }
  )
}

export function loadLayers(id){
  return fetch(
    '/borehole/stratigraphy/layer',
    {
      type: 'LIST',
      id: id // stratigrafy id
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
    '/borehole/stratigraphy/layer/edit',
    {
      action: 'CREATE',
      id: id // stratigraphy id
    }
  )
}

// Create a new stratigraphy for the given borehole id
export function deleteLayer(id){
  return fetch(
    '/borehole/stratigraphy/layer/edit',
    {
      action: 'DELETE',
      id: id // layer id
    }
  )
}

export function patchLayer(id, field, value){
  return fetch(
    '/borehole/stratigraphy/layer/edit',
    {
      action: 'PATCH',
      id: id,
      field: field,
      value: value
    }
  )
}
