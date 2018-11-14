import {
  fetch
} from './index'

export function loadMunicipalities(){
  return fetch(
    '/geoapi/municipality',
    {
      type: 'LIST'
    }
  )
}

export function getMunicipality(id){
  return fetch(
    '/geoapi/municipality',
    {
      action: 'GET',
      id: id
    }
  )
}

export function loadCantons(){
  return fetch(
    '/geoapi/canton',
    {
      type: 'LIST'
    }
  )
}

export function getCanton(id){
  return fetch(
    '/geoapi/canton',
    {
      action: 'GET',
      id: id
    }
  )
}