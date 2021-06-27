import axios from 'axios'
import { BASE_URL, API_KEY} from "./constant";

export const fetch = (method, path, params) => {
    let configHeader = {
        "grant_type": "client_credentials",
        "scope": API_KEY    }
    let url = BASE_URL + path

    return new Promise((resolve, reject) => {
        axios({
            method: method,
            url: url,
            headers: configHeader,
            data: params,
        })
            .then(response => {
                console.log('resolve -----------', response)
                resolve(response.data)
            })
            .catch(error => {
                console.log('error --------------', error);
                reject(error)
            })

    })
}
