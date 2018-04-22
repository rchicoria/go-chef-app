import axios from 'axios'
import { SERVER_URI, USER_ID } from './Config' 


const instance = axios.create({
    baseURL: SERVER_URI,
    headers: {'Authorization': USER_ID}
});

export const callEndpoint = async (endpoint, method, params, data) => {
    return await instance(endpoint, {
        method: method,
        params: params,
        data: data
    })
}

export const parseRecipe =  async(uri) => {
    let res = await callEndpoint('/recipes', 'post', null, {'recipeUri': uri})
    console.log(res)
}