import {
  fetch
} from './index';

export function loadUser(){
  return fetch(
    '/user',
    {
      type: 'GET'
    }
  );
}
