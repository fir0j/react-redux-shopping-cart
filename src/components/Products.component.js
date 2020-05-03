import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../acions/productActions';
import { addToCart } from '../acions/cartActions';

class Products extends Component {
	UNSAFE_componentWillMount() {
		this.props.fetchProducts();
	}

	render() {
		const productItems = this.props.products.map((product) => (
			<div key={product.id} className="col-md-4">
				{console.log(product.id)}
				<div className="card text-center mb-4">
					<a href={`#${product.id}`}>
						<img
							width="100%"
							height="130px"
							src={require(`../images/${product.name}.jpg`)}
							alt={product.name}
						/>
					</a>
					<h3>{product.name}</h3>
					<div>
						<b>{`Rs.${product.price}`}</b>
						<button
							className="btn btn-primary ml-5 mb-1"
							onClick={() => this.props.addToCart(this.props.cartItems, product)}
						>
							Add To Cart
						</button>
					</div>
				</div>
			</div>
		));

		return <div className="row">{productItems}</div>;
	}
}

// this is how we access any state of our app using 'state' object in any component easily
// 'state'  refers to the redux's global store of states  which has been created using combineReducers() function.
const mapStateToProps = (state) => ({
	products: state.products.filteredItems,
	cartItems: state.cart.cartItems
});

// this is how we access any methods,functions,actions or bussiness logic of our app(import, extract, use)
// it connect our component to redux store so that data and functions can be exchanged between the component and the redux-store.
export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);
