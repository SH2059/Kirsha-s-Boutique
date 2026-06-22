import { Link } from 'react-router-dom';

function ProductCard({ product }) {

    return (
        <div className="card h-100 shadow-sm">

            <div className="card-body">

                <h5 className="card-title">
                    {product.name}
                </h5>

                <p className="card-text">
                    ₹{product.price}
                </p>

                <Link
                    to={`/products/${product._id}`}
                    className="btn btn-dark"
                >
                    View Details
                </Link>

            </div>

        </div>

    );
}

export default ProductCard;