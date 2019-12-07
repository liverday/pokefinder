import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'  
});

const get = (endPoint, params, headers = {}) => {
    return axiosInstance.get(endPoint, {
        params,
        headers
    })
}


const post = (endPoint, params) => {
    
}

const handlers = {
    GET: get,
    POST: post
}

export const call = (verb, endPoint, payload) => handlers[verb](endPoint, payload)

export const HttpVerbs = {
    get: 'GET',
    post: 'POST'
}