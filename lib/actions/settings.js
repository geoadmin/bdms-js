import {
  fetch
} from './index'

export function loadSettings(){
  return fetch(
    '/setting',
    {
      type: 'GET'
    }
  );
}

export function patchSettings(field, value){
  return fetch(
    '/setting',
    {
      type: 'PATCH',
      field: field,
      value: value
    }
  );
}