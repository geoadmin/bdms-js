import {
  fetch
} from './index';

export function createWorkgroup(
  name
){
  return fetch(
    '/user/workgroup/edit',
    {
      action: 'CREATE',
      name: name
    }
  );
}

export function listWorkgroups(){
  return fetch(
    '/user/workgroup/edit',
    {
      type: 'LIST'
    }
  );
}

export function setRole(user_id, workgroup_id, role_name, active = true){
  return fetch(
    '/user/workgroup/edit',
    {
      action: 'SET',
      user_id: user_id,
      workgroup_id: workgroup_id,
      role_name: role_name,
      active: active
    }
  );
}
