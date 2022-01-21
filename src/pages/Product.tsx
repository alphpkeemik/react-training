import React from "react";
import classnames from "classnames";
import {Link} from "react-router-dom";
import {TProduct} from "../../types.t";

const styles = require("./Product.module.css");

interface ProductProps {
    product: TProduct;
}

const Product: React.FC<ProductProps> = (
    {product}) => {
    return (
        <div className={classnames(styles.product, {[styles.withImage]: !!product.imageUrl})}>
            <Link to={`products/${product.id}`}>
                <div className={styles.productTile}>{product.name}</div>
            </Link>
            <p className={styles.productContent}>{product.description}</p>

        </div>
    );
}

export default Product;