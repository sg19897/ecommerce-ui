import React from 'react'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product }) {
  const { cart, dispatch } = useCart()
  const inCart = cart.some(i => i.id === product.id)

  const stars = '★'.repeat(Math.floor(product.rating)) + (product.rating % 1 >= 0.5 ? '½' : '')

  return (
    <div style={styles.card}>
      {product.badge && <span style={styles.badge}>{product.badge}</span>}
      <div style={{ ...styles.imgBox, background: product.color + '22' }}>
        <div style={{ ...styles.placeholder, color: product.color }}>{product.name[0]}</div>
      </div>
      <div style={styles.body}>
        <p style={styles.category}>{product.category}</p>
        <h3 style={styles.name}>{product.name}</h3>
        <div style={styles.rating}>
          <span style={{ color: '#f39c12' }}>{stars}</span>
          <span style={styles.reviews}>({product.reviews})</span>
        </div>
        <div style={styles.footer}>
          <span style={styles.price}>₹{product.price.toLocaleString()}</span>
          <button
            style={{ ...styles.btn, background: inCart ? '#27ae60' : '#6c63ff' }}
            onClick={() => dispatch({ type: 'ADD', product })}
          >
            {inCart ? 'Added ✓' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  card: {
    background: '#fff', borderRadius: '12px', overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0,0,0,0.07)', transition: 'transform 0.2s', position: 'relative',
  },
  badge: {
    position: 'absolute', top: '10px', left: '10px',
    background: '#6c63ff', color: '#fff', fontSize: '0.7rem',
    padding: '0.2rem 0.6rem', borderRadius: '12px', textTransform: 'uppercase', fontWeight: '700',
  },
  imgBox: { height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  placeholder: { fontSize: '4rem', fontWeight: '800' },
  body: { padding: '1rem' },
  category: { fontSize: '0.75rem', color: '#999', textTransform: 'uppercase', letterSpacing: '0.5px' },
  name: { fontSize: '1rem', fontWeight: '700', color: '#2d3436', margin: '0.3rem 0' },
  rating: { display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.8rem' },
  reviews: { color: '#999', fontSize: '0.8rem' },
  footer: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  price: { fontSize: '1.2rem', fontWeight: '700', color: '#2d3436' },
  btn: {
    padding: '0.5rem 1rem', color: '#fff', border: 'none',
    borderRadius: '8px', fontSize: '0.85rem', fontWeight: '600', cursor: 'pointer',
  },
}
