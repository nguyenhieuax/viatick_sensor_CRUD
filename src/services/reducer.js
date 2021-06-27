import Immutable from 'immutable'
import { types } from './actions'

const initialState = Immutable.fromJS({
    gqlTokenData: []
})

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case types.GET_GQL_TOKEN_SUCCESS: {
            console.log('payload data ========',payload)
            return state.merge({ gqlTokenData: payload })
        }
        default:
            return state;
    }
}

const select = state => key => state.get('_reducer').toJS()[key];

export const selectors = {
    getGqlToken: state => select(state)('gqlToken'),
}
