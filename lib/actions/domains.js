import {
  fetch
} from './index'

export function loadDomains(){
  return fetch(
    '/borehole/codes',
    {
      type: 'LIST'
    }
  )
}
