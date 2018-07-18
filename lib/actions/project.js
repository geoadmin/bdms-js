import {
  fetch
} from './index'

export function loadProject(page = undefined, limit = undefined, filter = undefined){
  return fetch(
    '/borehole/project',
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
