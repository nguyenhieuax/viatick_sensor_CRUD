import { fetch } from '../utils/apiUtils'

const getToken = () => {
    return fetch('post', 'main/api/oauth2/token')
}

export default {
    getToken
}
