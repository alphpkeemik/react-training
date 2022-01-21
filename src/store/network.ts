 import {API} from "aws-amplify";
 import {TProduct} from "../../types.t";

export const apiCall  =  () : Promise<number> =>  {
    const promise: Promise<number> = new Promise((resolve) => {
        setTimeout(()  => resolve(Math.random() * 10000), 3000)
    })
    return promise;
}


export const getProducts : () => Promise<TProduct[]> = () => {
    return API.get("shop", '/items', {});
}