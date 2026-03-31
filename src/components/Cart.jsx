import React from 'react'
import { useCart } from '../context/CartContext'

export default function Cart({ onClose }) {
  const { cart, dispatch } = useCart()
  const total = cart.reduce((a, i) => a + i.price * i.qty, 0)

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.panel} onClick={e => e.stopPropagation()}>
        <div style={styles.header}>
          <h2>Your Cart ({cart.length})</h2>
          <button style={styles.closeBtn} onClick={onClose}>✕</button>
        </div>

        {cart.length === 0 ? (
          <div style={styles.empty}>Your cart is empty</div>
        ) : (
          <>
            <div style={styles.items}>
              {cart.map(item => (
                <div key={item.id} style={styles.item}>
                  <div style={{ ...styles.icon, color: item.color, background: item.color + '22' }}>
                    {item.name[0]}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={styles.itemName}>{item.name}</p>
                    <p style={styles.itemPrice}>₹{item.price.toLocaleString()}</p>
                  </div>
                  <div style={styles.qtyCtrl}>
                    <button style={styles.qtyBtn} onClick={() => {
                      if (item.qty === 1) dispatch({ type: 'REMOVE', id: item.id })
                      else dispatch({ type: 'UPDATE_QTY', id: item.id, qty: item.qty - 1 })
                    }}>−</button>
                    <span style={{ minWidth: '20px', textAlign: 'center' }}>{item.qty}</span>
                    <button style={styles.qtyBtn} onClick={() => dispatch({ type: 'UPDATE_QTY', id: item.id, qty: item.qty + 1 })}>+</button>
                  </div>
                </div>
              ))}
            </div>

            <div style={styles.footer}>
              <div style={styles.totalRow}>
                <span>Total</span>
                <strong>₹{total.toLocaleString()}</strong>
              </div>
              <button style={styles.checkoutBtn}>Proceed to Checkout</button>
              <button style={styles.clearBtn} onClick={() => dispatch({ type: 'CLEAR' })}>Clear Cart</button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

const styles = {
  overlay: { position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 200, display: 'flex', justifyContent: 'flex-end' },
  panel: { background: '#fff', width: '380px', height: '100%', display: 'flex', flexDirection: 'column', boxShadow: '-5px 0 20px rgba(0,0,0,0.15)' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', borderBottom: '1px solid #eee' },
  closeBtn: { background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer', color: '#666' },
  empty: { flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999', fontSize: '1rem' },
  items: { flex: 1, overflowY: 'auto', padding: '1rem' },
  item: { display: 'flex', gap: '0.8rem', alignItems: 'center', padding: '0.8rem 0', borderBottom: '1px solid #f0f0f0' },
  icon: { width: '45px', height: '45px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '1.2rem', flexShrink: 0 },
  itemName: { fontWeight: '600', fontSize: '0.9rem', marginBottom: '0.2rem' },
  itemPrice: { color: '#6c63ff', fontWeight: '700', fontSize: '0.9rem' },
  qtyCtrl: { display: 'flex', alignItems: 'center', gap: '0.5rem' },
  qtyBtn: { width: '28px', height: '28px', border: '1px solid #ddd', borderRadius: '6px', background: '#f5f5f5', cursor: 'pointer', fontWeight: '700' },
  footer: { padding: '1.5rem', borderTop: '1px solid #eee' },
  totalRow: { display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem', marginBottom: '1rem' },
  checkoutBtn: { width: '100%', padding: '0.9rem', background: '#6c63ff', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: '700', fontSize: '1rem', cursor: 'pointer', marginBottom: '0.5rem' },
  clearBtn: { width: '100%', padding: '0.7rem', background: 'none', color: '#e74c3c', border: '1px solid #e74c3c', borderRadius: '10px', fontWeight: '600', cursor: 'pointer' },
}
