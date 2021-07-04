import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <section>
            <h1>products page</h1>
            <ul>
                <li><Link to="/products/book-p1">Book</Link></li>
                <li><Link to="/products/radio-p2">Radio</Link></li>
                <li><Link to="/products/radio-p3">Phone</Link></li>
            </ul>
        </section>
    );
}
export default Products;