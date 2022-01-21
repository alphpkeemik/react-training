import {TProduct, TTodo} from "../../types.t";
import {Action, Dispatch} from "redux";
import {apiCall, getProducts} from "./network";

const namespace = '#products';
const prefix = (actionType: string) => `${namespace}/${actionType}`

interface IProductsState {
    products: TProduct[];
    loading: boolean;
}

const initialState: IProductsState = {
    products: [],
    loading: false,
}
interface TTodoAction extends Action{
    type: string,
    payload: TProduct[]
}

export const LOADING = prefix('LOADING')
export const SET_PRODUCTS = prefix('SET_PRODUCTS')

export const loadProducts = () => async (dispatch: Dispatch) => {
    dispatch({
        type: LOADING,
        payload: true,
    })
    return getProducts().then(result => dispatch({
        type: SET_PRODUCTS,
        payload: result,
    })).finally(() => {
        dispatch({
            type: LOADING,
            payload: false,
        })
    })
}

const productsReducer = (state: IProductsState = initialState, action:any) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: !!action.payload
            }
            break;
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
            break;
    }
    return state;
}

export default productsReducer;