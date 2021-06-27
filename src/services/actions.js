import { createAction } from '../utils/reduxHelper';

export const types = {
    GET_LIST_PRODUCT: 'GET_LIST_PRODUCT',
    GET_LIST_PRODUCT_SUCCESS: 'GET_LIST_PRODUCT_SUCCESS',
    GET_LIST_PRODUCT_FAIL: 'GET_LIST_PRODUCT_FAIL',

    GET_GQL_TOKEN: 'GET_GQL_TOKEN',
    GET_GQL_TOKEN_SUCCESS: 'GET_GQL_TOKEN_SUCCESS',
    GET_GQL_TOKEN_FAIL: 'GET_GQL_TOKEN_FAIL',

}

export const actions = {
    getListProduct: createAction(types.GET_LIST_PRODUCT),
    getListProductSuccess: createAction(types.GET_LIST_PRODUCT_SUCCESS),
    getListProductFail: createAction(types.GET_LIST_PRODUCT_FAIL),

    getGqlToken: createAction(types.GET_GQL_TOKEN),
    getGqlTokenSuccess: createAction(types.GET_GQL_TOKEN_SUCCESS),
    getGqlTokenFail: createAction(types.GET_GQL_TOKEN_FAIL),
}
