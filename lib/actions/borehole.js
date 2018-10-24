import {
  fetch
} from './index'

export function loadBoreholes(page = undefined, limit = undefined, filter = undefined){
  return fetch(
    '/borehole',
    {
      type: 'LIST',
      page: page,
      limit: limit,
      filter: filter
    }
  )
}

export function loadEditingBoreholes(page = undefined, limit = undefined, filter = undefined){
  return fetch(
    '/borehole/edit',
    {
      type: 'LIST',
      page: page,
      limit: limit,
      filter: filter
    }
  )
}

export function createBorehole(id=null){
  return fetch(
    '/borehole/edit',
    {
      action: 'CREATE',
      id: id // project id
    }
  )
}

export function patchBorehole(id, field, value){
  return fetch(
    '/borehole/edit',
    {
      action: 'PATCH',
      id: id,
      field: field,
      value: value
    }
  )
}

export function deleteBorehole(id){
  return fetch(
    '/borehole/edit',
    {
      action: 'DELETE',
      id: id
    }
  )
}

export function getBorehole(id){
  return fetch(
    '/borehole',
    {
      action: 'GET',
      id: id
    }
  )
}

export function loadBorehole(id){
  return fetch(
    '/borehole',
    {
      type: 'GET',
      id: id
    }
  )
}

export function updateBorehole(data){
  return {
    path: '/borehole',
    type: 'UPDATE',
    data: data
  }
}

export function checkBorehole(attribute, text){
  return fetch(
    '/borehole/edit',
    {
      action: 'CHECK',
      attribute: attribute,
      text: text
    }
  )
}

export function getGeojson(id){
  return fetch(
    '/borehole',
    {
      action: 'GEOJSON'
    }
  )
}
