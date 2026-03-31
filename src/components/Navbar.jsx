import React from 'react'
import { useCart } from '../context/CartContext'

export default function Navbar({ onCartOpen }) {
  const { cart } = useCart()
  const count = cart.reduce((a, i) => a + i.qty, 0)

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>🛍️ ShopZone</div>
      <button style={styles.cartBtn} onClick={onCartOpen}>
        Cart
        {count > 0 && <span style={styles.badge}>{count}</span>}
      </button>
    </nav>
  )
}

const styles = {
  nav: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '1rem 5%', background: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
    position: 'sticky', top: 0, zIndex: 100,
  },
  logo: { fontSize: '1.5rem', fontWeight: '800', color: '#6c63ff' },
  cartBtn: {
    position: 'relative', padding: '0.6rem 1.4rem', background: '#6c63ff',
    color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1rem',
    fontWeight: '600', cursor: 'pointer',
  },
  badge: {
    position: 'absolute', top: '-8px', right: '-8px',
    background: '#e74c3c', color: '#fff', borderRadius: '50%',
    width: '20px', height: '20px', fontSize: '0.7rem',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
}
