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

export function createUser(
  username,
  password,
  firstname = '',
  middlename = '',
  lastname = ''
){
  return fetch(
    '/user/edit',
    {
      action: 'CREATE',
      username: username,
      password: password,
      firstname: firstname,
      middlename: middlename,
      lastname: lastname
    }
  );
}

export function checkUsername(username){
  return fetch(
    '/user/edit',
    {
      type: 'CHECK',
      username: username
    }
  );
}

export function listUsers(){
  return fetch(
    '/user/edit',
    {
      type: 'LIST'
    }
  );
}
