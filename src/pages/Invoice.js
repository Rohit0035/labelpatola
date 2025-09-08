import React from 'react';

const Invoice = () => {
  const order = {
    customerName: "Priya Shah",
    id: "ORD123456",
    date: "18-Aug-2025",
    items: [
      { name: "Yellow Kurti", quantity: 1, price: 899 },
      { name: "Dupatta", quantity: 1, price: 299 },
      { name: "Printed Skirt", quantity: 2, price: 499 }
    ]
  };

  // Calculating totals
  const subtotal = order.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const gstRate = 0.18;
  const gstAmount = subtotal * gstRate;
  const grandTotal = subtotal + gstAmount;

  // Inline styles
  const styles = {
    container: {
      maxWidth: '100%',
      margin: '30px auto',
      padding: '30px',
      border: '1px solid #e0e0e0',
      borderRadius: '10px',
      fontSize: '16px',
      color: '#333',
      backgroundColor: '#fff'
    },
    header: {
      textAlign: 'center',
      marginBottom: '20px'
    },
    logo: {
      width: '100px',
      marginBottom: '10px'
    },
    title: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#c2185b' // Pink tone
    },
    section: {
      marginTop: '20px',
      marginBottom: '10px'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '10px'
    },
    th: {
      border: '1px solid #ddd',
      padding: '12px',
      backgroundColor: '#fce4ec', // light pink
      fontWeight: 'bold',
      textAlign: 'left'
    },
    td: {
      border: '1px solid #ddd',
      padding: '12px'
    },
    totals: {
      textAlign: 'right',
      marginTop: '20px'
    },
    totalRow: {
      fontWeight: 'bold',
      fontSize: '18px',
      color: '#000'
    },
    thankYou: {
      textAlign: 'center',
      marginTop: '40px',
      fontSize: '18px',
      color: '#c2185b'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img
          src="https://labelpatola.com/static/media/logo.86df568a231aaab9cf04.png"
          alt="Label Patola"
          style={styles.logo}
        />
        <div style={styles.title}>Order Invoice</div>
      </div>

      <div style={styles.section}>
        <p><strong>Customer:</strong> {order.customerName}</p>
        <p><strong>Order ID:</strong> {order.id}</p>
        <p><strong>Date:</strong> {order.date}</p>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Product</th>
            <th style={styles.th}>Qty</th>
            <th style={styles.th}>Unit Price (₹)</th>
            <th style={styles.th}>Total (₹)</th>
          </tr>
        </thead>
        <tbody>
          {order.items.map((item, index) => (
            <tr key={index}>
              <td style={styles.td}>{item.name}</td>
              <td style={styles.td}>{item.quantity}</td>
              <td style={styles.td}>₹{item.price.toFixed(2)}</td>
              <td style={styles.td}>₹{(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={styles.totals}>
        <p><strong>Subtotal:</strong> ₹{subtotal.toFixed(2)}</p>
        <p><strong>GST (18%):</strong> ₹{gstAmount.toFixed(2)}</p>
        <p style={styles.totalRow}>Grand Total: ₹{grandTotal.toFixed(2)}</p>
      </div>

      <div style={styles.thankYou}>
        Thank you for shopping with <strong>Label Patola</strong>! 💖
      </div>
    </div>
  );
};

export default Invoice;
