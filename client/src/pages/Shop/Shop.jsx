import {
    useEffect
} from 'react';

import {
    useDispatch,
    useSelector
} from 'react-redux';

import {
    fetchProducts
} from '../../redux/slices/productSlice';

import ProductCard from '../../components/products/ProductCard';

function Shop() {

    const dispatch = 
        useDispatch();

    const {
        products,
        loading
    } = useSelector(
        state => state.products
    );

    useEffect(() => {

        dispatch(
            fetchProducts()
        );
    }, [dispatch]);

    if (loading) {

        return (
            <div className="container mt-4">
                loading...
            </div>
        );
    }

    return(

        <div className="container mt-4">

            <h2>Shop</h2>

            <div className="row">

                {
                    products.map(product => (

                        <div
                            key={product._id}
                            className="col-md-4 mb-3"
                        >

                            <ProductCard
                                product={product}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Shop;
