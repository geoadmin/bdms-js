import axios from 'axios';

export function getHeight(easting, northing) {
  return axios.get(
    'https://api3.geo.admin.ch/rest/services/height',
    {
      params: {
        easting: easting,
        northing: northing,
        sr: 2056
      },
      // headers: {
      //   "Access-Control-Allow-Origin": "*",
      //   "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      //   "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
      // },
      // withCredentials: true 
    }
  );
};

export function getAddressByPoint(easting, northing) {
  return axios({
    url: process.env.PUBLIC_URL + '/api/v1/geoapi/location',
    timeout: 120000,
    method: 'post',
    responseType: 'json',
    data: {
      action: 'LOCATION',
      easting: easting,
      northing: northing
    }
  });
};

export function fetch(path, action, method = 'post', auth = null) {
  const conf = {
    url: (
      path.includes("http://") || path.includes("https://")?
        path: process.env.PUBLIC_URL + '/api/v1' + path
    ),
    timeout: 120000,
    method: method
  };
  if (auth !== null){
    conf["auth"] = auth;
  }
  if (action.hasOwnProperty('action')) {
    if (method === 'post') {
      conf['responseType'] = 'json';
      conf['data'] = action;
    } else if (method === 'get') {
      conf['responseType'] = 'xml';
      if (action.hasOwnProperty('params')) {
        conf['params'] = action.params;
      }
    }
    return axios(conf);
  } else {
    return function (dispatch = function () { }) {
      dispatch({
        path: path,
        ...action
      });
      if (method === 'post') {
        conf['responseType'] = 'json';
        const json = {};
        for (var key in action) {
          if (key === 'type') {
            json.action = action[key];
          } else {
            json[key] = action[key];
          }
        }
        conf['data'] = json;
      } else if (method === 'get') {
        conf['responseType'] = 'xml';
        if (action.hasOwnProperty('params')) {
          conf['params'] = action.params;
        }
      }
      return new Promise((resolve, reject) => {
        return axios(conf).then((response) => {
          if (response.data.success) {
            dispatch({
              type: action.type + "_OK",
              path: path,
              json: response.data,
              status: response.status,
              message: response.statusText
            });
          } else {
            dispatch({
              type: action.type + "_ERROR",
              path: path,
              json: response.data,
              status: response.status,
              message: response.statusText
            });
          }
          resolve(response.data, dispatch);
        }).catch(function (error) {
          debugger;
          dispatch({
            type: action.type + "_CONNECTION_ERROR",
            path: path,
            error: error
            // json: error.response.data,
            // status: error.response.status,
            // message: error.response.statusText
          });
          reject(error, dispatch);
        });
      });
    };
  }
};
