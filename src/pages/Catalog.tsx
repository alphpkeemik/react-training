import React from "react";
import Product from "./Product";
import {useDispatch, useSelector} from "react-redux";
import {TRootState} from "../store";
import {TProduct} from "../../types.t";
import {loadProducts} from "../store/products";

const Products: React.FC = () => {
    const products = useSelector((state: TRootState) => state.product.products)
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(loadProducts())
    }, [])
    const renderProduct: React.FC<TProduct> = (product) => {
        return <Product
            product={product}
        />
    }
    return (
        <div>
            <div className="products">
                {
                    products.map(renderProduct)
                }
            </div>
        </div>
    );
}

export default Products;