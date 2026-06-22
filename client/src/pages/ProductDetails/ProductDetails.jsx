import { useEffect } from "react";

import {
    useDispatch,
    useSelector
} from 'react-redux';

import {
    useParams
} from 'react-router-dom';

import {
    fetchProductsById
} from '../../redux/slices/productSlice';

function ProductDetails() {

    const { id } = useParams();

    const dispatch = 
        useDispatch();

    const {
        product,
        loading
    } = useSelector(
        state => state.products
    );

    useEffect(() => {

        dispatch(
            fetchProductsById(id)
        );
    }, [dispatch, id]);

    if (loading) {

        return (
            <div className="container mt-4">
                Loading...
            </div>
        );
    }

    if (!product) {

        return (
            <div className="container mt-4">
                Product not found.
            </div>
        );

    }

    return (

        <div className="container mt-4">

            <h2>
                {product.name}
            </h2>

            <h4>
                ₹{product.price}
            </h4>

            <p>
                {product.description}
            </p>

            <hr />

            <h5>
                Variants
            </h5>

            {
                product.variants?.map(
                    (
                        variant,
                        index
                    ) => (

                        <div
                            key={index}
                        >
                            Size:
                            {variant.size}
                            |
                            Color:
                            {variant.color}
                            |
                            Stock:
                            {variant.stock}
                        </div>
                    )
                )
            }

            <button 
                className="btn btn-success mt-3"
            >
                Add to Cart
            </button>

        </div>
    );
}

export default ProductDetails;