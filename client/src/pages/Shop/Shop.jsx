import {
    useEffect,
    useState
} from 'react';

import {
    useDispatch,
    useSelector
} from 'react-redux';

import {
    fetchProducts
} from '../../redux/slices/productSlice';

import ProductCard from '../../components/products/ProductCard';

import Loading from '../../components/common/Loading';

function Shop() {

    const dispatch = 
        useDispatch();

    const {
        products,
        loading
    } = useSelector(
        state => state.products
    );

    const [searchTerm, setSearchTerm] = useState('');
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {

        dispatch(
            fetchProducts({
                search,
                category
            })
        );
    }, [dispatch, search, category]);

    useEffect(() => {

        const timer = setTimeout(() => {

            setSearch(searchTerm);

        }, 500);

        return () => 
            clearTimeout(timer);

    }, [searchTerm]);

    return(

        <div className="container mt-4">

            <h2>Shop</h2>

            <div className="row mb-4">

                <div className="col-md-8">

                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => 
                            setSearchTerm(e.target.value)
                        }
                    />    
                </div> 

                <div className="col-md-4">

                    <select
                        className="form-select"
                        value={category}
                        onChange={(e) => 
                            setCategory(e.target.value)
                        }
                    >

                        <option value="">
                            All Categories
                        </option>

                        <option value="Women">
                            Women
                        </option>

                        <option value="Kids">
                            Kids
                        </option>

                        <option value="Accessories">
                            Accessories
                        </option>

                    </select>

                </div>
                
            </div>

            {
                loading && <Loading />
            }

            {
                !loading && 
                products.length === 0 && (

                    <div className="alert alert-info">

                        No products found
                
                    </div>
                )
            }

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
