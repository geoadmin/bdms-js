import {
  fetch
} from './index';

export function loadBoreholes(
    page = undefined,
    limit = undefined,
    filter = undefined,
    orderby = null,
    direction = null
  ){
  return fetch(
    '/borehole',
    {
      type: 'LIST',
      page: page,
      limit: limit,
      filter: filter,
      orderby: orderby,
      direction: direction
    }
  );
}

export function loadEditingBoreholes(
    page = undefined,
    limit = undefined,
    filter = undefined,
    orderby = null,
    direction = null
  ){
  return fetch(
    '/borehole/edit',
    {
      type: 'LIST',
      page: page,
      limit: limit,
      filter: filter,
      orderby: orderby,
      direction: direction
    }
  );
}

export function createBorehole(id=null){
  return fetch(
    '/borehole/edit',
    {
      action: 'CREATE',
      id: id // project id
    }
  );
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
  );
}

export function patchBoreholes(ids, fields){
  return fetch(
    '/borehole/edit',
    {
      action: 'MULTIPATCH',
      ids: ids,
      fields: fields
    }
  );
}

export function deleteBorehole(id){
  return fetch(
    '/borehole/edit',
    {
      action: 'DELETE',
      id: id
    }
  );
}

export function getBorehole(id){
  return fetch(
    '/borehole',
    {
      action: 'GET',
      id: id
    }
  );
}

export function loadBorehole(id){
  return fetch(
    '/borehole',
    {
      type: 'GET',
      id: id
    }
  );
}

export function updateBorehole(data){
  return {
    path: '/borehole',
    type: 'UPDATE',
    data: data
  };
}

export function checkBorehole(attribute, text){
  return fetch(
    '/borehole/edit',
    {
      action: 'CHECK',
      attribute: attribute,
      text: text
    }
  );
}

export function getGeojson(filter={}){
  return fetch(
    '/borehole',
    {
      action: 'GEOJSON',
      filter: filter
    }
  );
}
