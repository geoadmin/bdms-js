import {
  fetch
} from './index';

export function listIdentifier(){
  return fetch(
    '/borehole/identifier',
    {
      type: 'LIST'
    }
  );
}

export function createIdentifier(text){
  return fetch(
    '/borehole/identifier/admin',
    {
      action: 'CREATE',
      text: text
    }
  );
}

export function deleteIdentifier(id){ 
  return fetch(
    '/borehole/identifier/admin',
    {
      action: 'DELETE',
      id: id
    }
  );
}

export function updateIdentifier(id, text){
  return fetch(
    '/borehole/identifier/admin',
    {
      action: 'UPDATE',
      id: id,
      text: text
    }  
  );
}

export function addIdentifier(borehole_id, identifier, value){
  return fetch(
    '/borehole/identifier/edit',
    {
      action: 'ADD',
      id: borehole_id,
      cid: identifier,
      value: value
    }
  );
}

export function removeIdentifier(borehole_id, identifier){
  return fetch(
    '/borehole/identifier/edit',
    {
      action: 'REMOVE',
      id: borehole_id,
      cid: identifier
    }
  );
}
