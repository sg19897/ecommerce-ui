import React, { useState, useMemo } from 'react'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import Cart from './components/Cart'
import { products, categories } from './data/products'

export default function App() {
  return (
    <CartProvider>
      <ShopPage />
    </CartProvider>
  )
}

function ShopPage() {
  const [cartOpen, setCartOpen] = useState(false)
  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('default')

  const filtered = useMemo(() => {
    let list = products
    if (category !== 'All') list = list.filter(p => p.category === category)
    if (search) list = list.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    if (sort === 'price-asc')  list = [...list].sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price)
    if (sort === 'rating')     list = [...list].sort((a, b) => b.rating - a.rating)
    return list
  }, [category, search, sort])

  return (
    <div>
      <Navbar onCartOpen={() => setCartOpen(true)} />

      {/* Hero */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Shop the Latest Trends</h1>
        <p style={styles.heroSub}>Quality products, unbeatable prices.</p>
      </div>

      {/* Filters */}
      <div style={styles.controls}>
        <input
          style={styles.search}
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div style={styles.categories}>
          {categories.map(cat => (
            <button
              key={cat}
              style={{ ...styles.catBtn, background: category === cat ? '#6c63ff' : '#fff', color: category === cat ? '#fff' : '#555' }}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <select style={styles.sortSelect} value={sort} onChange={e => setSort(e.target.value)}>
          <option value="default">Sort: Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      {/* Products */}
      <div style={styles.main}>
        <p style={styles.count}>{filtered.length} products</p>
        {filtered.length === 0 ? (
          <p style={{ color: '#999', textAlign: 'center', padding: '3rem' }}>No products found.</p>
        ) : (
          <div style={styles.grid}>
            {filtered.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </div>

      {cartOpen && <Cart onClose={() => setCartOpen(false)} />}
    </div>
  )
}

const styles = {
  hero: {
    background: 'linear-gradient(135deg, #6c63ff, #a29bfe)',
    padding: '3rem 5%', color: '#fff', textAlign: 'center',
  },
  heroTitle: { fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.5rem' },
  heroSub: { fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)' },
  controls: { padding: '1.5rem 5%', background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' },
  search: {
    width: '100%', padding: '0.8rem 1rem', border: '2px solid #eee',
    borderRadius: '8px', fontSize: '1rem', outline: 'none', marginBottom: '1rem',
  },
  categories: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' },
  catBtn: {
    padding: '0.4rem 1rem', border: '1px solid #ddd', borderRadius: '20px',
    fontSize: '0.85rem', cursor: 'pointer', fontWeight: '500', transition: 'all 0.2s',
  },
  sortSelect: {
    padding: '0.6rem 1rem', border: '2px solid #eee', borderRadius: '8px',
    fontSize: '0.9rem', outline: 'none', cursor: 'pointer', background: '#fff',
  },
  main: { padding: '1.5rem 5%' },
  count: { color: '#999', fontSize: '0.9rem', marginBottom: '1rem' },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    gap: '1.5rem',
  },
}
