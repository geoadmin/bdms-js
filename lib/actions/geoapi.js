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

export function loadCantons(){
  return fetch(
    '/geoapi/canton',
    {
      type: 'LIST'
    }
  )
}
