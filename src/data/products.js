export const products = [
  { id: 1,  name: 'Wireless Headphones',  category: 'Electronics', price: 2999,  rating: 4.5, reviews: 128, badge: 'bestseller', color: '#6c63ff' },
  { id: 2,  name: 'Running Sneakers',     category: 'Footwear',    price: 1499,  rating: 4.2, reviews: 85,  badge: null,         color: '#27ae60' },
  { id: 3,  name: 'Casual Backpack',      category: 'Bags',        price: 899,   rating: 4.7, reviews: 210, badge: 'top rated',  color: '#e74c3c' },
  { id: 4,  name: 'Smart Watch',          category: 'Electronics', price: 4999,  rating: 4.6, reviews: 302, badge: 'new',        color: '#f39c12' },
  { id: 5,  name: 'Cotton T-Shirt',       category: 'Clothing',    price: 499,   rating: 4.0, reviews: 55,  badge: null,         color: '#3498db' },
  { id: 6,  name: 'Yoga Mat',             category: 'Sports',      price: 699,   rating: 4.4, reviews: 97,  badge: null,         color: '#1abc9c' },
  { id: 7,  name: 'Desk Lamp',            category: 'Home',        price: 799,   rating: 4.3, reviews: 64,  badge: null,         color: '#e67e22' },
  { id: 8,  name: 'Bluetooth Speaker',    category: 'Electronics', price: 1999,  rating: 4.8, reviews: 415, badge: 'bestseller', color: '#9b59b6' },
  { id: 9,  name: 'Leather Wallet',       category: 'Accessories', price: 599,   rating: 4.1, reviews: 33,  badge: null,         color: '#795548' },
  { id: 10, name: 'Sunglasses',           category: 'Accessories', price: 1299,  rating: 4.5, reviews: 148, badge: 'new',        color: '#00bcd4' },
  { id: 11, name: 'Protein Powder',       category: 'Sports',      price: 1599,  rating: 4.6, reviews: 220, badge: null,         color: '#8bc34a' },
  { id: 12, name: 'Ceramic Coffee Mug',   category: 'Home',        price: 299,   rating: 4.2, reviews: 78,  badge: null,         color: '#ff5722' },
]

export const categories = ['All', ...new Set(products.map(p => p.category))]
