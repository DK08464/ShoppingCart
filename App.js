import React, { useState } from 'react';
import './App.css';

const productsData = [
  {
    id: 1,
    name: 'iPhone 15',
    imgSrc : "data:image/jpeg;base64,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",
    price: 799,
    rating: 10,
  },
  {
    id: 2,
    name: 'Galaxy S24',
    imgSrc : "data:image/jpeg;base64,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",
    price: 799,
    rating: 10,
  },
];

const App = () => {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const incrementQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const filteredProducts = productsData
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === 'All' || product.category === selectedCategory)
    )
    .map((product) => (
      <div key={product.id} className="product-card">
        <img src={product.imgSrc} alt={product.name} />
        <div className="product-info">
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <div className="product-rating">Rating: {product.rating}</div>
        </div>
        <div className="product-actions">
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          <div className="quantity-actions">
            <button onClick={() => decrementQuantity(product.id)}>-</button>
            <button onClick={() => incrementQuantity(product.id)}>+</button>
          </div>
        </div>
      </div>
    ));

  return (
    <div className="app">
      <header>
        <h1>Shopping Cart</h1>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>
      <nav>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
         
        </select>
      </nav>
      <main>
        <div className="products">{filteredProducts}</div>
      </main>
      <aside>
        <h2>Shopping Cart</h2>
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.name}</span>
              <span>${item.price * item.quantity}</span>
              <span>Quantity: {item.quantity}</span>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default App;