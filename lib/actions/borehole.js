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
      ...filter
    }
  )
}

export function createBorehole(){
  return fetch(
    '/borehole',
    {
      action: 'CREATE'
    }
  )
}

export function patchBorehole(id, field, value){
  return fetch(
    '/borehole',
    {
      action: 'PATCH',
      id: id,
      field: field,
      value: value
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

export function checkBorehole(attribute, text){
  return fetch(
    '/borehole',
    {
      action: 'CHECK',
      attribute: attribute,
      text: text
    }
  )
}
